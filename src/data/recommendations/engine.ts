import { brawlers } from "../brawlers"
import { getRecommendationProfile } from "./index"
import { loadStoredGlobalCounters } from "../adminStore"
import type {
  BrawlerMapData,
  DraftState,
  GlobalCounterMatrix,
  RecommendationBreakdown,
  RecommendationResult,
} from "./types"

const rarityFallback: Record<string, number> = {
  starter: 0.2,
  rare: 0.3,
  superRare: 0.42,
  epic: 0.55,
  mythic: 0.7,
  legendary: 0.85,
  ultraLegendary: 0.95,
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function parseNeedTags(need: { tag?: string; tags?: string[] }) {
  if (need.tags && need.tags.length > 0) return need.tags
  if (need.tag) return [need.tag]
  return []
}

function average(values: Array<number | undefined>) {
  const filtered = values.filter((value): value is number => typeof value === "number")
  if (filtered.length === 0) return 0
  return filtered.reduce((sum, value) => sum + value, 0) / filtered.length
}

function blendStage(progress: number) {
  const early = clamp(1 - progress * 1.5, 0, 1)
  const mid = 1 - Math.abs(progress - 0.5) / 0.5
  const late = clamp((progress - 0.45) * 2, 0, 1)

  return { early, mid: clamp(mid, 0, 1), late }
}

function addReason(reasons: string[], label: string, value: number, threshold = 0.35) {
  if (value > threshold) reasons.push(label)
}

function resolveCurrentTeam(state: DraftState) {
  if (state.phase === "bans") {
    return state.banIndex % 2 === 0 ? "blue" : "red"
  }

  return state.turnOrder[state.pickIndex] ?? null
}

function getGlobalMatrix(): GlobalCounterMatrix {
  return loadStoredGlobalCounters()
}

function getGlobalCounterScore(candidateName: string, enemyNames: string[]) {
  const matrix = getGlobalMatrix()
  const entry = matrix[candidateName]
  if (!entry) return 0

  const values = enemyNames
    .map((enemyName) => entry.counters?.[enemyName])
    .filter((value): value is number => typeof value === "number")

  if (values.length === 0) return 0
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function getGlobalFavorScore(candidateName: string, enemyNames: string[]) {
  const matrix = getGlobalMatrix()
  const values = enemyNames
    .map((enemyName) => matrix[candidateName]?.favoredInto?.[enemyName])
    .filter((value): value is number => typeof value === "number")

  if (values.length === 0) return 0
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function evaluateEntry(
  entry: BrawlerMapData | undefined,
  progress: number,
  friendlyNames: string[],
  enemyNames: string[],
): RecommendationBreakdown {
  const stageBlend = blendStage(progress)
  const mapFit = entry?.mapFit ?? 0
  const versatility = entry?.versatility ?? 0
  const synergy = average(friendlyNames.map((name) => entry?.synergy?.[name]))
  const mapCounter = average(enemyNames.map((name) => entry?.counters?.[name]))
  const stage =
    (entry?.stage?.early ?? 0) * stageBlend.early +
    (entry?.stage?.mid ?? 0) * stageBlend.mid +
    (entry?.stage?.late ?? 0) * stageBlend.late

  return {
    base: 0,
    globalCounter: 0,
    globalFavor: 0,
    composition: 0,
    mapCounter,
    mapFit,
    versatility,
    synergy,
    stage,
  }
}

export function getDraftRecommendations(state: DraftState): RecommendationResult[] {
  const profile = getRecommendationProfile(state.selectedMap?.name)
  const currentTeam = resolveCurrentTeam(state)
  const friendlyTeam = currentTeam === "red" ? state.redTeam : state.blueTeam
  const enemyTeam = currentTeam === "red" ? state.blueTeam : state.redTeam
  const friendlyNames = friendlyTeam.map((brawler) => brawler.name)
  const enemyNames = enemyTeam.map((brawler) => brawler.name)
  const usedNames = new Set([
    ...state.blueTeam,
    ...state.redTeam,
    ...state.blueBans,
    ...state.redBans,
  ].map((brawler) => brawler.name))

  const pickProgress = state.pickIndex / 6
  const revealProgress = enemyTeam.length / 3
  const isBanPhase = state.phase === "bans"

  const dynamicWeights = {
    mapFit: clamp(1.25 - pickProgress * 0.45, 0.45, 1.25),
    versatility: clamp(1.1 - pickProgress * 0.28, 0.45, 1.1),
    globalCounter: clamp(0.25 + revealProgress * 1.15, 0.25, 1.4),
    globalFavor: clamp(0.2 + revealProgress * 1.0, 0.2, 1.25),
    mapCounter: clamp(0.2 + revealProgress * 0.8, 0.2, 1.15),
    composition: clamp(0.55 + pickProgress * 0.55, 0.55, 1.1),
    synergy: clamp(0.35 + pickProgress * 0.9, 0.35, 1.25),
    stage: isBanPhase ? 0.4 : 0.65,
  }

  const baseWeights = profile.weights ?? {}
  const compositionNeeds = profile.composition ?? []
  const friendlyTagCounts = friendlyTeam
    .flatMap((brawler) => profile.brawlers[brawler.name]?.tags ?? [])
    .reduce<Record<string, number>>((counts, tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1
      return counts
    }, {})

  return brawlers
    .filter((brawler) => !usedNames.has(brawler.name))
    .map((brawler) => {
      const entry = profile.brawlers[brawler.name]
      const breakdown = evaluateEntry(entry, pickProgress, friendlyNames, enemyNames)
      const rarityBase = rarityFallback[brawler.rarity] ?? 0.25
      const globalCounterBase = getGlobalCounterScore(brawler.name, enemyNames)
      const globalFavorBase = getGlobalFavorScore(brawler.name, enemyNames)
      const candidateTags = entry?.tags ?? []
      const compositionScore = compositionNeeds.reduce((score, need) => {
        const needTags = parseNeedTags(need)
        if (needTags.length === 0) return score
        if (!needTags.some((tag) => candidateTags.includes(tag))) return score

        const currentCount = Math.max(...needTags.map((tag) => friendlyTagCounts[tag] ?? 0), 0)
        const missing = Math.max(0, need.count - currentCount)
        if (missing <= 0) return score

        return score + missing * (need.weight ?? 1)
      }, 0)

      const baseScore = rarityBase
      const mapFitScore =
        (breakdown.mapFit * (baseWeights.mapFit ?? 1) * dynamicWeights.mapFit) +
        (isBanPhase ? rarityBase * 0.1 : 0)
      const versatilityScore =
        ((entry?.versatility ?? rarityBase) * (baseWeights.versatility ?? 1) * dynamicWeights.versatility)
      const globalCounterScore =
        (globalCounterBase * (baseWeights.globalCounter ?? 1) * dynamicWeights.globalCounter)
      const globalFavorScore =
        (globalFavorBase * (baseWeights.globalFavor ?? 1) * dynamicWeights.globalFavor)
      const compositionWeightedScore =
        (compositionScore * (baseWeights.composition ?? 1) * dynamicWeights.composition)
      const mapCounterScore =
        (breakdown.mapCounter * (baseWeights.counter ?? 1) * dynamicWeights.mapCounter)
      const synergyScore =
        (breakdown.synergy * (baseWeights.synergy ?? 1) * dynamicWeights.synergy)
      const stageScore =
        (breakdown.stage * (baseWeights.stage ?? 1) * dynamicWeights.stage)

      const score =
        baseScore +
        mapFitScore +
        versatilityScore +
        globalCounterScore +
        globalFavorScore +
        compositionWeightedScore +
        mapCounterScore +
        synergyScore +
        stageScore
      const reasons: string[] = []
      addReason(reasons, "Counter", globalCounterScore, 0.45)
      addReason(reasons, "Favored", globalFavorScore, 0.45)
      addReason(reasons, "Comp", compositionWeightedScore, 0.5)
      addReason(reasons, "Map", mapCounterScore, 0.5)
      addReason(reasons, "Synergy", synergyScore, 0.45)
      addReason(reasons, "Phase", stageScore, 0.45)

      const limitedReasons = reasons.slice(0, 3)

      return {
        brawler,
        score,
        breakdown: {
          ...breakdown,
          base: baseScore,
          globalCounter: globalCounterScore,
          globalFavor: globalFavorScore,
          composition: compositionWeightedScore,
          mapCounter: mapCounterScore,
          versatility: (entry?.versatility ?? rarityBase),
        },
        reasons: limitedReasons,
      }
    })
    .sort((left, right) => right.score - left.score)
}
