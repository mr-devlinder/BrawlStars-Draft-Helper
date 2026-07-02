import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import { brawlers, type Brawler } from "../data/brawlers"
import { createMapRecommendationProfile } from "../data/recommendations/base"
import { getRecommendationProfile } from "../data/recommendations"
import type { GameMap } from "../data/maps"
import type {
  BrawlerMapData,
  CompositionNeed,
  GlobalCounterMatrix,
  MapRecommendationProfile,
  MapRecommendationWeights,
} from "../data/recommendations/types"
import {
  loadStoredAnnouncement,
  loadStoredGlobalCounters,
  loadStoredProfileOverrides,
  saveStoredAnnouncement,
  saveStoredGlobalCounters,
  saveStoredProfileOverrides,
} from "../data/adminStore"

type Props = {
  maps: Record<string, GameMap>
  onMapsChange: (maps: Record<string, GameMap>) => void
  onBackToDraft: () => void
  onLogout: () => void
}

type CompositionDraft = {
  id: string
  tags: string
  count: string
  weight: string
  notes: string
}

type BrawlerDraft = {
  mapFit: string
  versatility: string
  tags: string
  stageEarly: string
  stageMid: string
  stageLate: string
  synergy: string
}

type ProfileDraft = {
  weights: Record<keyof MapRecommendationWeights, string>
  composition: CompositionDraft[]
  brawlers: Record<string, BrawlerDraft>
}

type GlobalDraftEntry = {
  counters: string
  favoredInto: string
}

type SyncState = {
  state: "idle" | "saving" | "saved" | "error"
  message: string
  details?: string
}

type AnnouncementDraft = {
  active: boolean
  message: string
}

type WeightKey = keyof MapRecommendationWeights

const weightKeys: WeightKey[] = [
  "mapFit",
  "versatility",
  "globalCounter",
  "globalFavor",
  "composition",
  "synergy",
  "counter",
  "stage",
]

function parseLineScores(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce<Record<string, number>>((acc, line) => {
      const [rawName, rawScore] = line.split(":")
      if (!rawName || !rawScore) return acc

      const name = rawName.trim()
      const score = Number.parseFloat(rawScore.trim())
      if (!name || Number.isNaN(score)) return acc

      acc[name] = score
      return acc
    }, {})
}

function stringifyLineScores(values: Partial<Record<string, number>> | undefined) {
  return Object.entries(values ?? {})
    .map(([name, score]) => `${name}: ${score}`)
    .join("\n")
}

function stringifyTagList(tags: string[] | undefined) {
  return (tags ?? []).join(" or ")
}

function parseTagList(tags: string) {
  return tags
    .split(/\s*(?:\||,|\/|\bor\b)\s*/i)
    .map((tag) => tag.trim())
    .filter(Boolean)
}

function numberToInput(value: number | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? String(value) : ""
}

function parseNumber(value: string, fallback = 0) {
  const next = Number.parseFloat(value)
  return Number.isFinite(next) ? next : fallback
}

function parseRawStatInput(input: string, mapName: string) {
  const lines = input
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  const brawler = lines[0]?.replace(/:$/, "").trim()
  if (!brawler) {
    throw new Error("Paste a brawler block with the brawler name on the first line.")
  }

  const overallIndex = lines.indexOf("Overall Stats")
  const mapIndex = lines.indexOf("Performance by Map")

  if (overallIndex === -1 || mapIndex === -1) {
    throw new Error("The pasted stats need Overall Stats and Performance by Map sections.")
  }

  const overallScore = Number.parseFloat(lines[overallIndex + 2] ?? "")
  if (!Number.isFinite(overallScore)) {
    throw new Error("Could not read the overall score from the pasted stats.")
  }

  const targetMap = mapName.trim().toLowerCase()
  let mapFit: number | undefined

  for (let index = mapIndex + 1; index < lines.length; index += 1) {
    const next = lines[index]
    if (next.toLowerCase() !== targetMap) continue

    const score = Number.parseFloat(lines[index + 2] ?? "")
    if (!Number.isFinite(score)) {
      throw new Error(`Found ${mapName}, but could not read its score.`)
    }

    mapFit = score
    break
  }

  if (typeof mapFit !== "number") {
    throw new Error(`Could not find the selected map name "${mapName}" in the pasted stats.`)
  }

  return {
    brawler,
    versatility: overallScore,
    mapFit,
  }
}

function formatSyncError(error: unknown) {
  const raw = error instanceof Error ? error.message : String(error)
  return raw.replace(/\s+/g, " ").trim().slice(0, 180)
}

function isMapRecommendationProfile(value: unknown): value is MapRecommendationProfile {
  return Boolean(
    value &&
      typeof value === "object" &&
      typeof (value as MapRecommendationProfile).mapName === "string" &&
      typeof (value as MapRecommendationProfile).mode === "string" &&
      typeof (value as MapRecommendationProfile).brawlers === "object",
  )
}

function buildBrawlerDraft(entry?: BrawlerMapData): BrawlerDraft {
  return {
    mapFit: numberToInput(entry?.mapFit),
    versatility: numberToInput(entry?.versatility),
    tags: stringifyTagList(entry?.tags),
    stageEarly: numberToInput(entry?.stage?.early),
    stageMid: numberToInput(entry?.stage?.mid),
    stageLate: numberToInput(entry?.stage?.late),
    synergy: stringifyLineScores(entry?.synergy),
  }
}

function buildCompositionDraft(entry: CompositionNeed): CompositionDraft {
  const tags = entry.tags && entry.tags.length > 0 ? entry.tags : entry.tag ? [entry.tag] : []
  return {
    id: `${tags.join("-") || "composition"}-${Math.random().toString(36).slice(2, 8)}`,
    tags: tags.join(" or "),
    count: String(entry.count),
    weight: String(entry.weight ?? 1),
    notes: entry.notes ?? "",
  }
}

function buildProfileDraft(profile: MapRecommendationProfile): ProfileDraft {
  const resolved = createMapRecommendationProfile(profile)

  return {
    weights: weightKeys.reduce((acc, key) => {
      acc[key] = numberToInput(resolved.weights?.[key])
      return acc
    }, {} as Record<WeightKey, string>),
    composition: (resolved.composition ?? []).map(buildCompositionDraft),
    brawlers: brawlers.reduce((acc, brawler) => {
      acc[brawler.name] = buildBrawlerDraft(resolved.brawlers?.[brawler.name])
      return acc
    }, {} as Record<string, BrawlerDraft>),
  }
}

function buildGlobalDraft(matrix: GlobalCounterMatrix) {
  return brawlers.reduce((acc, brawler) => {
    const entry = matrix[brawler.name] ?? { counters: {}, favoredInto: {} }
    acc[brawler.name] = {
      counters: stringifyLineScores(entry.counters),
      favoredInto: stringifyLineScores(entry.favoredInto),
    }
    return acc
  }, {} as Record<string, GlobalDraftEntry>)
}

function serializeBrawlerDraft(draft: BrawlerDraft): BrawlerMapData {
  const synergy = parseLineScores(draft.synergy)
  const tags = parseTagList(draft.tags)
  const stageEntries = {
    early: parseNumber(draft.stageEarly, 0),
    mid: parseNumber(draft.stageMid, 0),
    late: parseNumber(draft.stageLate, 0),
  }

  const result: BrawlerMapData = {}

  const mapFit = parseNumber(draft.mapFit, Number.NaN)
  const versatility = parseNumber(draft.versatility, Number.NaN)
  if (Number.isFinite(mapFit)) result.mapFit = mapFit
  if (Number.isFinite(versatility)) result.versatility = versatility
  if (tags.length > 0) result.tags = tags
  if (Object.keys(synergy).length > 0) result.synergy = synergy
  if (stageEntries.early || stageEntries.mid || stageEntries.late) {
    result.stage = stageEntries
  }

  return result
}

function serializeCompositionDraft(rows: CompositionDraft[]) {
  return rows
    .map((row) => {
      const tags = parseTagList(row.tags)
      const count = parseNumber(row.count, 0)
      const weight = parseNumber(row.weight, 1)
      const notes = row.notes.trim()

      if (tags.length === 0 || count <= 0) return null

      const entry: CompositionNeed = {
        count,
        weight,
      }

      if (tags.length === 1) {
        entry.tag = tags[0]
      } else {
        entry.tags = tags
      }
      if (notes) entry.notes = notes

      return entry
    })
    .filter((entry): entry is CompositionNeed => Boolean(entry))
}

function serializeProfileDraft(
  mapName: string,
  mode: string,
  draft: ProfileDraft,
  sharedWeights: Record<WeightKey, string>,
  baseProfile?: MapRecommendationProfile,
): MapRecommendationProfile {
  const weights = weightKeys.reduce((acc, key) => {
    const fallback = baseProfile?.weights?.[key] ?? 1
    acc[key] = parseNumber(sharedWeights[key], fallback)
    return acc
  }, {} as Partial<Record<WeightKey, number>>)

  const brawlerProfiles = Object.entries(draft.brawlers).reduce((acc, [name, brawlerDraft]) => {
    acc[name] = serializeBrawlerDraft(brawlerDraft)
    return acc
  }, {} as Record<string, BrawlerMapData>)

  return createMapRecommendationProfile({
    mapName,
    mode,
    weights,
    composition: serializeCompositionDraft(draft.composition),
    brawlers: brawlerProfiles,
    notes: baseProfile?.notes,
  })
}

function makeUniqueMapName(name: string, maps: Record<string, GameMap>) {
  if (!maps[name]) return name
  let suffix = 2
  let nextName = `${name} ${suffix}`

  while (maps[nextName]) {
    suffix += 1
    nextName = `${name} ${suffix}`
  }

  return nextName
}

function getFirstMapName(maps: Record<string, GameMap>) {
  return Object.keys(maps)[0] ?? ""
}

export default function AdminDashboard({ maps, onMapsChange, onBackToDraft, onLogout }: Props) {
  const [selectedMapName, setSelectedMapName] = useState(getFirstMapName(maps))
  const [selectedBrawlerName, setSelectedBrawlerName] = useState<Brawler["name"]>(brawlers[0]?.name ?? "")
  const [mapSearch, setMapSearch] = useState("")
  const [brawlerSearch, setBrawlerSearch] = useState("")
  const [globalSearch, setGlobalSearch] = useState("")
  const [profiles, setProfiles] = useState<Record<string, MapRecommendationProfile>>(() => loadStoredProfileOverrides())
  const [globalCounters, setGlobalCounters] = useState<GlobalCounterMatrix>(() => loadStoredGlobalCounters())
  const [announcementDraft, setAnnouncementDraft] = useState<AnnouncementDraft>(() => loadStoredAnnouncement())
  const [sharedWeights, setSharedWeights] = useState<Record<WeightKey, string>>(() =>
    weightKeys.reduce((acc, key) => {
      const saved = getRecommendationProfile(getFirstMapName(maps) || undefined).weights?.[key]
      acc[key] = numberToInput(saved)
      return acc
    }, {} as Record<WeightKey, string>),
  )
  const [mapDraft, setMapDraft] = useState({ name: "", mode: "", image: "" })
  const [profileDraft, setProfileDraft] = useState<ProfileDraft>(() =>
    buildProfileDraft(getRecommendationProfile(getFirstMapName(maps) || undefined)),
  )
  const [globalDraft, setGlobalDraft] = useState<Record<string, GlobalDraftEntry>>(() =>
    buildGlobalDraft(loadStoredGlobalCounters()),
  )
  const [importProfileError, setImportProfileError] = useState("")
  const [newMapName, setNewMapName] = useState("")
  const [newMapMode, setNewMapMode] = useState("Brawl Ball")
  const [newMapImage, setNewMapImage] = useState("")
  const [importInputKey, setImportInputKey] = useState(0)
  const [showAnnouncementEditor, setShowAnnouncementEditor] = useState(false)
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    sharedWeights: false,
    mapProfile: false,
    composition: false,
    brawlerProfile: false,
    globalMatchups: false,
    sync: false,
  })
  const [rawStatsInput, setRawStatsInput] = useState("")
  const [rawStatsError, setRawStatsError] = useState("")
  const profileImportRef = useRef<HTMLInputElement | null>(null)
  const [syncState, setSyncState] = useState<SyncState>({
    state: "idle",
    message: "Ready",
  })

  function toggleSection(section: string) {
    setCollapsedSections((current) => ({
      ...current,
      [section]: !current[section],
    }))
  }

  useEffect(() => {
    const firstMap = getFirstMapName(maps)
    if (selectedMapName && maps[selectedMapName]) return
    setSelectedMapName(firstMap)
  }, [maps, selectedMapName])

  const selectedMap = selectedMapName ? maps[selectedMapName] ?? null : null
  const savedProfile = selectedMapName
    ? profiles[selectedMapName] ?? getRecommendationProfile(selectedMapName)
    : getRecommendationProfile(getFirstMapName(maps) || undefined)
  const selectedBrawler = brawlers.find((brawler) => brawler.name === selectedBrawlerName) ?? brawlers[0]

  useEffect(() => {
    if (!selectedMap) {
      setMapDraft({ name: "", mode: "", image: "" })
      return
    }

    setMapDraft({
      name: selectedMap.name,
      mode: selectedMap.mode,
      image: selectedMap.image,
    })
  }, [selectedMapName, selectedMap?.name, selectedMap?.mode, selectedMap?.image])

  useEffect(() => {
    setProfileDraft(buildProfileDraft(savedProfile))
  }, [selectedMapName, profiles])

  useEffect(() => {
    setGlobalDraft(buildGlobalDraft(globalCounters))
  }, [globalCounters])

  useEffect(() => {
    setAnnouncementDraft(loadStoredAnnouncement())
  }, [])

  useEffect(() => {
    const current = selectedMapName ? profiles[selectedMapName] ?? savedProfile : savedProfile
    setSharedWeights((existing) => {
      const next = weightKeys.reduce((acc, key) => {
        const currentValue = current.weights?.[key]
        acc[key] = existing[key] ?? numberToInput(currentValue)
        return acc
      }, {} as Record<WeightKey, string>)
      return next
    })
  }, [selectedMapName, profiles, savedProfile])

  const filteredMaps = useMemo(
    () =>
      Object.values(maps).filter((map) =>
        (map.name + " " + map.mode).toLowerCase().includes(mapSearch.toLowerCase()),
      ),
    [maps, mapSearch],
  )

  const filteredBrawlers = useMemo(
    () => brawlers.filter((brawler) => brawler.name.toLowerCase().includes(brawlerSearch.toLowerCase())),
    [brawlerSearch],
  )

  const filteredGlobalBrawlers = useMemo(
    () => brawlers.filter((brawler) => brawler.name.toLowerCase().includes(globalSearch.toLowerCase())),
    [globalSearch],
  )

  function setSync(state: SyncState["state"], message: string, details?: string) {
    setSyncState({ state, message, details })
  }

  function commitMaps(nextMaps: Record<string, GameMap>) {
    onMapsChange(nextMaps)
    if (selectedMapName && !nextMaps[selectedMapName]) {
      setSelectedMapName(getFirstMapName(nextMaps))
    }
  }

  async function commitProfiles(nextProfiles: Record<string, MapRecommendationProfile>, message: string) {
    setProfiles(nextProfiles)
    setSync("saving", message)
    try {
      await saveStoredProfileOverrides(nextProfiles)
      setSync("saved", "Profile data saved")
      return true
    } catch (error) {
      setSync("error", "Could not save profile data", formatSyncError(error))
      return false
    }
  }

  async function commitGlobalCounters(nextMatrix: GlobalCounterMatrix) {
    setGlobalCounters(nextMatrix)
    setSync("saving", "Saving global matchups...")
    try {
      await saveStoredGlobalCounters(nextMatrix)
      setSync("saved", "Global matchups saved")
    } catch (error) {
      setSync("error", "Could not save global matchups", formatSyncError(error))
    }
  }

  function updateMapDraftField<K extends keyof GameMap>(field: K, value: GameMap[K]) {
    setMapDraft((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function updateProfileWeight(field: WeightKey, value: string) {
    setSharedWeights((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function updateCompositionRow(id: string, key: keyof CompositionDraft, value: string) {
    setProfileDraft((current) => {
      const nextComposition = current.composition.map((row) =>
        row.id === id
          ? {
              ...row,
              [key]: value,
            }
          : row,
      )

      return {
        ...current,
        composition: nextComposition,
      }
    })
  }

  function addCompositionRow() {
    setProfileDraft((current) => ({
      ...current,
      composition: [
        ...current.composition,
        { id: Math.random().toString(36).slice(2, 10), tags: "", count: "1", weight: "1", notes: "" },
      ],
    }))
  }

  function removeCompositionRow(id: string) {
    setProfileDraft((current) => ({
      ...current,
      composition: current.composition.filter((row) => row.id !== id),
    }))
  }

  function updateSelectedBrawlerDraft(field: keyof BrawlerDraft, value: string) {
    if (!selectedBrawler) return

    setProfileDraft((current) => ({
      ...current,
      brawlers: {
        ...current.brawlers,
        [selectedBrawler.name]: {
          ...(current.brawlers[selectedBrawler.name] ?? buildBrawlerDraft()),
          [field]: value,
        },
      },
    }))
  }

  function updateGlobalDraft(brawlerName: string, field: keyof GlobalDraftEntry, value: string) {
    setGlobalDraft((current) => ({
      ...current,
      [brawlerName]: {
        ...(current[brawlerName] ?? { counters: "", favoredInto: "" }),
        [field]: value,
      },
    }))
  }

  async function handleProfileImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const text = await file.text()
      const parsed = JSON.parse(text) as unknown

      if (!isMapRecommendationProfile(parsed)) {
        throw new Error("That file is not a valid map profile JSON.")
      }

      const importedProfile = createMapRecommendationProfile(parsed)
      setMapDraft({
        name: importedProfile.mapName,
        mode: importedProfile.mode,
        image: mapDraft.image,
      })
      setProfileDraft(buildProfileDraft(importedProfile))
      setImportProfileError("")
      setSync("saved", `Imported ${importedProfile.mapName}`)
    } catch (error) {
      setImportProfileError(error instanceof Error ? error.message : "Import failed.")
      setSync("error", "Could not import profile", formatSyncError(error))
    } finally {
      setImportInputKey((current) => current + 1)
    }
  }

  function convertRawStats() {
    try {
      if (!selectedMap) {
        throw new Error("Select a map first.")
      }

      const converted = parseRawStatInput(rawStatsInput, selectedMap.name)
      if (!selectedBrawler) {
        throw new Error("Select a brawler first.")
      }

      setProfileDraft((current) => ({
        ...current,
        brawlers: {
          ...current.brawlers,
          [selectedBrawler.name]: {
            ...(current.brawlers[selectedBrawler.name] ?? buildBrawlerDraft()),
            mapFit: typeof converted.mapFit === "number" ? String(converted.mapFit) : "",
            versatility: String(converted.versatility),
          },
        },
      }))
      setRawStatsError("")
      setSync("saved", "Converted raw stats")
    } catch (error) {
      setRawStatsError(error instanceof Error ? error.message : "Conversion failed.")
      setSync("error", "Could not convert raw stats", formatSyncError(error))
    }
  }

  async function saveSelectedMapProfile() {
    if (!selectedMap) return

    const originalName = selectedMapName
    const nextName = mapDraft.name.trim() || selectedMap.name
    const nextMode = mapDraft.mode.trim() || selectedMap.mode
    const nextImage = mapDraft.image.trim()
    const nextMap: GameMap = {
      name: nextName,
      mode: nextMode,
      image: nextImage,
    }
    const nextProfile = serializeProfileDraft(nextName, nextMode, profileDraft, sharedWeights, savedProfile)

    const nextMaps = { ...maps }
    const nextProfiles = { ...profiles }

    if (originalName && originalName !== nextName) {
      delete nextMaps[originalName]
      delete nextProfiles[originalName]
    }

    nextMaps[nextName] = nextMap
    nextProfiles[nextName] = nextProfile

    for (const mapKey of Object.keys(nextProfiles)) {
      nextProfiles[mapKey] = {
        ...nextProfiles[mapKey],
        weights: weightKeys.reduce((acc, key) => {
          acc[key] = parseNumber(sharedWeights[key], nextProfile.weights?.[key] ?? 1)
          return acc
        }, {} as Partial<Record<WeightKey, number>>),
      }
    }

    commitMaps(nextMaps)
    setProfiles(nextProfiles)
    setSelectedMapName(nextName)
    setMapDraft({
      name: nextMap.name,
      mode: nextMap.mode,
      image: nextMap.image,
    })
    setProfileDraft(buildProfileDraft(nextProfile))
    setSync("saving", "Saving map profile...")

    try {
      await saveStoredProfileOverrides(nextProfiles)
      setSync("saved", `Saved ${nextName}`)
    } catch (error) {
      setSync("error", "Could not save map profile", formatSyncError(error))
    }
  }

  async function saveGlobalMatchupDraft() {
    const nextMatrix = brawlers.reduce((acc, brawler) => {
      const entry = globalDraft[brawler.name] ?? { counters: "", favoredInto: "" }
      const counters = parseLineScores(entry.counters)
      const favoredInto = parseLineScores(entry.favoredInto)
      if (Object.keys(counters).length > 0 || Object.keys(favoredInto).length > 0) {
        acc[brawler.name] = { counters, favoredInto }
      }
      return acc
    }, {} as GlobalCounterMatrix)

    await commitGlobalCounters(nextMatrix)
  }

  async function saveAnnouncementDraft() {
    setSync("saving", "Saving announcement...")
    try {
      await saveStoredAnnouncement(announcementDraft)
      setSync("saved", announcementDraft.active ? "Announcement enabled" : "Announcement disabled")
    } catch (error) {
      setSync("error", "Could not save announcement", formatSyncError(error))
    }
  }

  async function createNewMap() {
    const nextName = makeUniqueMapName(newMapName.trim() || "New Map", maps)
    const nextMode = newMapMode.trim() || "Brawl Ball"
    const nextImage = newMapImage.trim()

    const nextMaps = {
      ...maps,
      [nextName]: {
        name: nextName,
        mode: nextMode,
        image: nextImage,
      },
    }

    const nextProfiles = {
      ...profiles,
      [nextName]: createMapRecommendationProfile({
        mapName: nextName,
        mode: nextMode,
        brawlers: {},
      }),
    }

    commitMaps(nextMaps)
    const saved = await commitProfiles(nextProfiles, "Saving new map...")
    setSelectedMapName(nextName)
    setSelectedBrawlerName(brawlers[0]?.name ?? "")
    setMapDraft({
      name: nextName,
      mode: nextMode,
      image: nextImage,
    })
    setProfileDraft(buildProfileDraft(nextProfiles[nextName]))
    setNewMapName("")
    setNewMapImage("")
    if (saved) {
      setSync("saved", "Map created")
    }
  }

  async function deleteSelectedMap() {
    if (!selectedMapName) return

    const nextMaps = { ...maps }
    delete nextMaps[selectedMapName]

    const nextProfiles = { ...profiles }
    delete nextProfiles[selectedMapName]

    commitMaps(nextMaps)
    const saved = await commitProfiles(nextProfiles, "Deleting map...")
    setSelectedMapName(getFirstMapName(nextMaps))
    setSelectedBrawlerName(brawlers[0]?.name ?? "")
    if (saved) {
      setSync("saved", "Map deleted")
    }
  }

  const mapCount = Object.keys(maps).length
  const selectedProfileJson = serializeProfileDraft(
    mapDraft.name.trim() || selectedMapName || savedProfile.mapName,
    mapDraft.mode.trim() || selectedMap?.mode || savedProfile.mode,
    profileDraft,
    sharedWeights,
    selectedMapName ? profiles[selectedMapName] ?? savedProfile : savedProfile,
  )
  const selectedBrawlerDraft = profileDraft.brawlers[selectedBrawler?.name ?? ""]

  return (
    <main className="app admin-app">
      <header className="top-bar admin-top-bar">
        <div className="brand">
          <div className="brand-mark">
            <img src="favicon.svg" alt="Brawl Stars Draft Logo" />
          </div>
          <div>
            <h1>Admin</h1>
            <span>Draft Data Manager</span>
          </div>
        </div>

        <div className="admin-top-stats">
          <div>
            <span>Maps</span>
            <strong>{mapCount}</strong>
          </div>
          <div className={"save-pill " + syncState.state}>
            <span>Sync</span>
            <strong>{syncState.message}</strong>
          </div>
        </div>

        <div className="actions">
          <button type="button" onClick={() => setShowAnnouncementEditor(true)}>
            Announcement
          </button>
          <button type="button" onClick={onBackToDraft}>
            Back
          </button>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <section className="admin-layout">
        <aside className="panel admin-sidebar">
          <div className="admin-section">
            <div className="panel-heading">
              <h2>Maps</h2>
              <span>{filteredMaps.length}</span>
            </div>

            <label className="admin-search">
              <span>Search maps</span>
              <input
                value={mapSearch}
                onChange={(event) => setMapSearch(event.target.value)}
                placeholder="Filter maps"
              />
            </label>

            <div className="admin-list">
              {filteredMaps.map((map) => (
                <button
                  className={"admin-list-item" + (selectedMapName === map.name ? " selected" : "")}
                  key={map.name}
                  onClick={() => setSelectedMapName(map.name)}
                  type="button"
                >
                  <strong>{map.name}</strong>
                  <span>{map.mode}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="admin-section">
            <div className="panel-heading">
              <h2>Add map</h2>
              <span>New entry</span>
            </div>
            <div className="admin-stack">
              <label>
                <span>Name</span>
                <input
                  value={newMapName}
                  onChange={(event) => setNewMapName(event.target.value)}
                  placeholder="New map"
                />
              </label>
              <label>
                <span>Mode</span>
                <input
                  value={newMapMode}
                  onChange={(event) => setNewMapMode(event.target.value)}
                  placeholder="Mode"
                />
              </label>
              <label>
                <span>Image path</span>
                <input
                  value={newMapImage}
                  onChange={(event) => setNewMapImage(event.target.value)}
                  placeholder="/maps/example.png"
                />
              </label>
              <button type="button" onClick={() => void createNewMap()}>
                Add map
              </button>
            </div>
          </div>

          <div className="admin-section">
            <div className="panel-heading">
              <h2>Global Matchups</h2>
              <div className="admin-section-toolbar">
                <span>{filteredGlobalBrawlers.length}</span>
                <button type="button" onClick={() => void saveGlobalMatchupDraft()}>
                  Save
                </button>
                <button type="button" onClick={() => toggleSection("globalMatchups")} aria-label="Toggle global matchups">
                  {collapsedSections.globalMatchups ? "+" : "-"}
                </button>
              </div>
            </div>

            {!collapsedSections.globalMatchups ? (
              <>
                <label className="admin-search">
                  <span>Search brawlers</span>
                  <input
                    value={globalSearch}
                    onChange={(event) => setGlobalSearch(event.target.value)}
                    placeholder="Filter global counters"
                  />
                </label>

                <div className="admin-global-list">
                  {filteredGlobalBrawlers.map((brawler) => {
                    const entry = globalDraft[brawler.name] ?? { counters: "", favoredInto: "" }

                    return (
                      <div className="admin-global-row" key={brawler.name}>
                        <div className="admin-global-head">
                          <strong>{brawler.name}</strong>
                          <span>{brawler.rarity}</span>
                        </div>
                        <label>
                          <span>Counters</span>
                          <textarea
                            rows={5}
                            value={entry.counters}
                            onChange={(event) => updateGlobalDraft(brawler.name, "counters", event.target.value)}
                            placeholder="Colette: 9.1"
                          />
                        </label>
                        <label>
                          <span>Favored into</span>
                          <textarea
                            rows={5}
                            value={entry.favoredInto}
                            onChange={(event) => updateGlobalDraft(brawler.name, "favoredInto", event.target.value)}
                            placeholder="Bibi: 6.8"
                          />
                        </label>
                      </div>
                    )
                  })}
                </div>
              </>
            ) : null}
          </div>

          <div className="admin-section admin-sync-panel">
            <div className="panel-heading">
              <h2>Sync</h2>
              <div className="admin-section-toolbar">
                <span>{syncState.state}</span>
                <button type="button" onClick={() => toggleSection("sync")} aria-label="Toggle sync panel">
                  {collapsedSections.sync ? "+" : "-"}
                </button>
              </div>
            </div>
            {!collapsedSections.sync ? (
              <>
                <p className="admin-sync-copy">
                  This shows the latest save result. Successful saves update the local cache and Supabase.
                </p>
                {syncState.details ? (
                  <details className="admin-sync-details">
                    <summary>Details</summary>
                    <pre>{syncState.details}</pre>
                  </details>
                ) : null}
              </>
            ) : null}
          </div>
        </aside>

        <section className="panel admin-workspace">
          {!selectedMap ? (
            <div className="recommendation-empty-state">
              <strong>No map selected</strong>
              <span>Choose or add a map to start editing its data.</span>
            </div>
          ) : (
            <div className="admin-grid">
              <div className="admin-card">
                <div className="panel-heading">
                  <h2>Shared Weights</h2>
                  <div className="admin-section-toolbar">
                    <span>Apply to all maps</span>
                    <button type="button" onClick={() => toggleSection("sharedWeights")} aria-label="Toggle shared weights">
                      {collapsedSections.sharedWeights ? "+" : "-"}
                    </button>
                  </div>
                </div>
                {!collapsedSections.sharedWeights ? (
                  <div className="admin-fields compact">
                    {weightKeys.map((field) => (
                      <label key={field}>
                        <span>{field}</span>
                        <input
                          type="text"
                          inputMode="decimal"
                          value={sharedWeights[field] ?? ""}
                          onChange={(event) => updateProfileWeight(field, event.target.value)}
                        />
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="admin-card">
                <div className="panel-heading">
                  <h2>Map Profile</h2>
                  <div className="admin-section-toolbar">
                    <button type="button" onClick={() => void deleteSelectedMap()}>
                      Delete map
                    </button>
                    <button type="button" onClick={() => void saveSelectedMapProfile()}>
                      Save profile
                    </button>
                    <button type="button" onClick={() => toggleSection("mapProfile")} aria-label="Toggle map profile">
                      {collapsedSections.mapProfile ? "+" : "-"}
                    </button>
                  </div>
                </div>

                {!collapsedSections.mapProfile ? (
                  <div className="admin-fields">
                    <label>
                      <span>Map name</span>
                      <input
                        value={mapDraft.name}
                        onChange={(event) => updateMapDraftField("name", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Mode</span>
                      <input
                        value={mapDraft.mode}
                        onChange={(event) => updateMapDraftField("mode", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Image</span>
                      <input
                        value={mapDraft.image}
                        onChange={(event) => updateMapDraftField("image", event.target.value)}
                      />
                    </label>
                  </div>
                ) : null}
              </div>

              <div className="admin-card">
                <div className="panel-heading">
                  <h2>Composition</h2>
                  <div className="admin-section-toolbar">
                    <button type="button" onClick={addCompositionRow}>
                      Add row
                    </button>
                    <button type="button" onClick={() => toggleSection("composition")} aria-label="Toggle composition">
                      {collapsedSections.composition ? "+" : "-"}
                    </button>
                  </div>
                </div>
                {!collapsedSections.composition ? (
                  <div className="admin-composition-list">
                    {profileDraft.composition.map((row) => (
                      <div className="admin-composition-row" key={row.id}>
                        <input
                          value={row.tags}
                          onChange={(event) => updateCompositionRow(row.id, "tags", event.target.value)}
                          placeholder="agro or pressure"
                        />
                        <input
                          type="text"
                          inputMode="numeric"
                          value={row.count}
                          onChange={(event) => updateCompositionRow(row.id, "count", event.target.value)}
                          placeholder="1"
                        />
                        <input
                          type="text"
                          inputMode="decimal"
                          value={row.weight}
                          onChange={(event) => updateCompositionRow(row.id, "weight", event.target.value)}
                          placeholder="1"
                        />
                        <input
                          value={row.notes}
                          onChange={(event) => updateCompositionRow(row.id, "notes", event.target.value)}
                          placeholder="Notes"
                        />
                        <button type="button" onClick={() => removeCompositionRow(row.id)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="admin-card admin-brawler-editor">
                <div className="panel-heading">
                  <h2>Brawler Profile</h2>
                  <div className="admin-section-toolbar">
                    <span>{filteredBrawlers.length} brawlers</span>
                    <button type="button" onClick={() => toggleSection("brawlerProfile")} aria-label="Toggle brawler profile">
                      {collapsedSections.brawlerProfile ? "+" : "-"}
                    </button>
                  </div>
                </div>

                {!collapsedSections.brawlerProfile ? (
                  <div className="admin-brawler-shell">
                  <aside className="admin-brawler-list">
                    <label className="admin-search">
                      <span>Search brawlers</span>
                      <input
                        value={brawlerSearch}
                        onChange={(event) => setBrawlerSearch(event.target.value)}
                        placeholder="Filter brawlers"
                      />
                    </label>
                    <div className="admin-list">
                      {filteredBrawlers.map((brawler) => (
                        <button
                          className={"admin-list-item" + (selectedBrawlerName === brawler.name ? " selected" : "")}
                          key={brawler.name}
                          onClick={() => setSelectedBrawlerName(brawler.name)}
                          type="button"
                        >
                          <strong>{brawler.name}</strong>
                          <span>{brawler.rarity}</span>
                        </button>
                      ))}
                    </div>
                  </aside>

                  {selectedBrawler ? (
                    <div className="admin-brawler-form">
                      <div className="admin-fields">
                        <label>
                          <span>Map fit</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={selectedBrawlerDraft?.mapFit ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("mapFit", event.target.value)}
                          />
                        </label>
                        <label>
                          <span>Versatility</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={selectedBrawlerDraft?.versatility ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("versatility", event.target.value)}
                          />
                        </label>
                        <label>
                          <span>Tags</span>
                          <input
                            value={selectedBrawlerDraft?.tags ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("tags", event.target.value)}
                            placeholder="tank-counter or flex"
                          />
                        </label>
                      </div>

                      <div className="admin-fields compact">
                        <label>
                          <span>Stage - early</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={selectedBrawlerDraft?.stageEarly ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("stageEarly", event.target.value)}
                          />
                        </label>
                        <label>
                          <span>Stage - mid</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={selectedBrawlerDraft?.stageMid ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("stageMid", event.target.value)}
                          />
                        </label>
                        <label>
                          <span>Stage - late</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={selectedBrawlerDraft?.stageLate ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("stageLate", event.target.value)}
                          />
                        </label>
                      </div>

                      <div className="admin-textareas">
                        <label>
                          <span>Synergy</span>
                          <textarea
                            value={selectedBrawlerDraft?.synergy ?? ""}
                            onChange={(event) => updateSelectedBrawlerDraft("synergy", event.target.value)}
                            rows={8}
                            placeholder="Meeple: 8"
                          />
                        </label>
                      </div>
                    </div>
                  ) : null}
                  </div>
                ) : null}
              </div>

              <details className="admin-card admin-raw-profile">
                <summary>Raw profile</summary>
                <div className="admin-stack">
                  <div className="admin-raw-actions">
                    <button type="button" onClick={() => convertRawStats()}>
                      Convert into current map
                    </button>
                    <button type="button" onClick={() => setRawStatsInput("")}>
                      Clear
                    </button>
                  </div>
                  <label>
                    <span>Paste website stats for the selected brawler</span>
                    <textarea
                      className="admin-json"
                      rows={16}
                      value={rawStatsInput}
                      onChange={(event) => setRawStatsInput(event.target.value)}
                      placeholder={`Kaze:\nOverall Stats\nS\n76.8\nUse Rate\n6.10%\nPerformance by Mode\nHeist\nS+\n88.3\nUse Rate\n7.40%\n...`}
                    />
                  </label>
                  {rawStatsError ? <p className="admin-sync-copy">{rawStatsError}</p> : null}
                </div>
                <div className="admin-raw-actions">
                  <input
                    key={importInputKey}
                    ref={profileImportRef}
                    className="admin-hidden-file"
                    type="file"
                    accept=".json,application/json"
                    onChange={(event) => void handleProfileImport(event)}
                  />
                  <button type="button" onClick={() => profileImportRef.current?.click()}>
                    Import JSON
                  </button>
                </div>
                {importProfileError ? <p className="admin-sync-copy">{importProfileError}</p> : null}
                <textarea className="admin-json" readOnly value={JSON.stringify(selectedProfileJson, null, 2)} rows={28} />
              </details>
            </div>
          )}
        </section>
      </section>

      {showAnnouncementEditor ? (
        <div className="announcement-backdrop" onClick={() => setShowAnnouncementEditor(false)} role="presentation">
          <div className="announcement-modal admin-announcement-modal" onClick={(event) => event.stopPropagation()}>
            <div className="panel-heading">
              <h2>Announcement</h2>
              <button type="button" className="map-preview-close" onClick={() => setShowAnnouncementEditor(false)} aria-label="Close announcement editor">
                x
              </button>
            </div>

            <label className="admin-switch-row">
              <span>Active</span>
              <label className="admin-switch">
                <input
                  type="checkbox"
                  checked={announcementDraft.active}
                  onChange={(event) => setAnnouncementDraft((current) => ({ ...current, active: event.target.checked }))}
                />
                <span />
              </label>
            </label>

            <label className="admin-stack">
              <span>Message</span>
              <textarea
                rows={8}
                value={announcementDraft.message}
                onChange={(event) => setAnnouncementDraft((current) => ({ ...current, message: event.target.value }))}
                placeholder="Write the message people should see when they open the app"
              />
            </label>

            <div className="admin-raw-actions">
              <button type="button" onClick={() => void saveAnnouncementDraft()}>
                Save announcement
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <footer className="app-footer admin-footer">
        <span>Edits save locally in this browser and then sync to Supabase.</span>
        <button type="button" onClick={onBackToDraft}>
          Return to Draft
        </button>
      </footer>
    </main>
  )
}
