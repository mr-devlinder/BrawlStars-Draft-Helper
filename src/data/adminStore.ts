import type { GameMap } from "./maps"
import type { GlobalCounterMatrix, MapRecommendationProfile } from "./recommendations/types"
import {
  isSupabaseConfigured,
  loadAllConfigRows,
  readJson,
  readSupabaseSession,
  refreshSession,
  signInWithPassword,
  upsertConfigRow,
  writeJson,
  writeSupabaseSession,
  type SupabaseSession,
} from "./supabaseClient"

const MAPS_KEY = "brawldraft.admin.maps.v1"
const PROFILES_KEY = "brawldraft.admin.profiles.v1"
const GLOBAL_COUNTERS_KEY = "brawldraft.admin.globalCounters.v1"
const ANNOUNCEMENT_KEY = "brawldraft.admin.announcement.v1"
const ADMIN_SESSION_KEY = "brawldraft.admin.session.v1"

const SUPABASE_ADMIN_EMAIL = import.meta.env.VITE_SUPABASE_ADMIN_EMAIL as string | undefined

export type AnnouncementConfig = {
  active: boolean
  message: string
}

let mapsCache: Record<string, GameMap> = readJson<Record<string, GameMap>>(MAPS_KEY) ?? {}
let profilesCache: Record<string, MapRecommendationProfile> =
  readJson<Record<string, MapRecommendationProfile>>(PROFILES_KEY) ?? {}
let globalCountersCache: GlobalCounterMatrix = readJson<GlobalCounterMatrix>(GLOBAL_COUNTERS_KEY) ?? {}
let announcementCache: AnnouncementConfig = readJson<AnnouncementConfig>(ANNOUNCEMENT_KEY) ?? {
  active: false,
  message: "",
}
let adminSessionCache: SupabaseSession | null = readSupabaseSession(ADMIN_SESSION_KEY)

export function loadStoredMaps(defaultMaps: Record<string, GameMap>) {
  return Object.keys(mapsCache).length > 0 ? mapsCache : defaultMaps
}

export function loadStoredProfileOverrides() {
  return profilesCache
}

export function loadStoredGlobalCounters() {
  return globalCountersCache
}

export function loadStoredAnnouncement() {
  return announcementCache
}

export function loadAdminSession() {
  return adminSessionCache
}

export function saveAdminSession(session: SupabaseSession) {
  adminSessionCache = session
  writeSupabaseSession(ADMIN_SESSION_KEY, session)
}

export function clearAdminSession() {
  adminSessionCache = null
  writeSupabaseSession(ADMIN_SESSION_KEY, null)
}

async function resolveSession() {
  if (!adminSessionCache) return null

  const now = Math.floor(Date.now() / 1000)
  if (adminSessionCache.expires_at > now + 60) {
    return adminSessionCache
  }

  try {
    const refreshed = await refreshSession(adminSessionCache.refresh_token)
    saveAdminSession(refreshed)
    return refreshed
  } catch {
    clearAdminSession()
    return null
  }
}

export async function bootstrapRuntimeData(defaultMaps: Record<string, GameMap>) {
  mapsCache = Object.keys(mapsCache).length > 0 ? mapsCache : defaultMaps
  profilesCache = profilesCache ?? {}
  globalCountersCache = globalCountersCache ?? {}
  announcementCache = announcementCache ?? { active: false, message: "" }

  if (!isSupabaseConfigured()) {
    return {
      maps: mapsCache,
      profiles: profilesCache,
      globalCounters: globalCountersCache,
      announcement: announcementCache,
    }
  }

  try {
    const rows = await loadAllConfigRows()
    const nextMaps = rows.find((row) => row.key === "maps")?.value as Record<string, GameMap> | undefined
    const nextProfiles = rows.find((row) => row.key === "profiles")?.value as Record<string, MapRecommendationProfile> | undefined
    const nextGlobalCounters = rows.find((row) => row.key === "globalCounters")?.value as GlobalCounterMatrix | undefined
    const nextAnnouncement = rows.find((row) => row.key === "announcement")?.value as AnnouncementConfig | undefined

    if (nextMaps) {
      mapsCache = nextMaps
      writeJson(MAPS_KEY, nextMaps)
    }
    if (nextProfiles) {
      profilesCache = nextProfiles
      writeJson(PROFILES_KEY, nextProfiles)
    }
    if (nextGlobalCounters) {
      globalCountersCache = nextGlobalCounters
      writeJson(GLOBAL_COUNTERS_KEY, nextGlobalCounters)
    }
    if (nextAnnouncement) {
      announcementCache = {
        active: Boolean(nextAnnouncement.active),
        message: typeof nextAnnouncement.message === "string" ? nextAnnouncement.message : "",
      }
      writeJson(ANNOUNCEMENT_KEY, announcementCache)
    }
  } catch {
    // Keep local cached data if Supabase is unavailable.
  }

  return {
    maps: mapsCache,
    profiles: profilesCache,
    globalCounters: globalCountersCache,
    announcement: announcementCache,
  }
}

export async function saveStoredMaps(maps: Record<string, GameMap>) {
  mapsCache = maps
  writeJson(MAPS_KEY, maps)

  if (!isSupabaseConfigured()) return
  const session = await resolveSession()
  if (!session) return

  await upsertConfigRow("maps", maps, session.access_token)
}

export async function saveStoredProfileOverrides(profiles: Record<string, MapRecommendationProfile>) {
  profilesCache = profiles
  writeJson(PROFILES_KEY, profiles)

  if (!isSupabaseConfigured()) return
  const session = await resolveSession()
  if (!session) return

  await upsertConfigRow("profiles", profiles, session.access_token)
}

export async function saveStoredGlobalCounters(matrix: GlobalCounterMatrix) {
  globalCountersCache = matrix
  writeJson(GLOBAL_COUNTERS_KEY, matrix)

  if (!isSupabaseConfigured()) return
  const session = await resolveSession()
  if (!session) return

  await upsertConfigRow("globalCounters", matrix, session.access_token)
}

export async function saveStoredAnnouncement(config: AnnouncementConfig) {
  announcementCache = {
    active: Boolean(config.active),
    message: config.message,
  }
  writeJson(ANNOUNCEMENT_KEY, announcementCache)

  if (!isSupabaseConfigured()) return
  const session = await resolveSession()
  if (!session) return

  await upsertConfigRow("announcement", announcementCache, session.access_token)
}

export async function signInAdmin(email: string, password: string) {
  const session = await signInWithPassword(email, password)

  if (SUPABASE_ADMIN_EMAIL && session.user.email !== SUPABASE_ADMIN_EMAIL) {
    throw new Error("This account is not allowed to use the admin dashboard.")
  }

  saveAdminSession(session)
  return session
}

export function isSupabaseAdminConfigured() {
  return isSupabaseConfigured()
}

export function getAdminEmailAllowlist() {
  return SUPABASE_ADMIN_EMAIL ?? null
}

export function updateRuntimeMapsCache(maps: Record<string, GameMap>) {
  mapsCache = maps
}

export function updateRuntimeProfilesCache(profiles: Record<string, MapRecommendationProfile>) {
  profilesCache = profiles
}

export function updateRuntimeGlobalCountersCache(matrix: GlobalCounterMatrix) {
  globalCountersCache = matrix
}

export function updateRuntimeAnnouncementCache(config: AnnouncementConfig) {
  announcementCache = config
}
