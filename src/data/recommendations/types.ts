import type { Brawler } from "../brawlers"
import type { GameMap } from "../maps"

export type DraftTeam = "blue" | "red"
export type DraftPhase = "bans" | "picks"

export type StageBias = {
  early?: number
  mid?: number
  late?: number
}

export type BrawlerMapData = {
  mapFit?: number
  versatility?: number
  synergy?: Record<string, number>
  counters?: Record<string, number>
  stage?: StageBias
  tags?: string[]
  notes?: string
}

export type MapRecommendationWeights = {
  mapFit: number
  versatility: number
  globalCounter: number
  synergy: number
  counter: number
  stage: number
}

export type MapRecommendationProfile = {
  mapName: string
  mode: string
  weights?: Partial<MapRecommendationWeights>
  brawlers: Partial<Record<string, BrawlerMapData>>
  notes?: string
}

export type DraftState = {
  selectedMap: GameMap | null
  phase: DraftPhase
  startingTeam: DraftTeam
  turnOrder: DraftTeam[]
  banIndex: number
  pickIndex: number
  blueTeam: Brawler[]
  redTeam: Brawler[]
  blueBans: Brawler[]
  redBans: Brawler[]
}

export type RecommendationBreakdown = {
  base: number
  globalCounter: number
  mapCounter: number
  mapFit: number
  versatility: number
  synergy: number
  stage: number
}

export type RecommendationResult = {
  brawler: Brawler
  score: number
  breakdown: RecommendationBreakdown
  reasons: string[]
}
