import { createMapRecommendationProfile } from "./base"
import type { MapRecommendationProfile } from "./types"

const profileModules = import.meta.glob("./maps/*.ts", {
  eager: true,
  import: "default",
}) as Record<string, MapRecommendationProfile>

export const recommendationProfiles = Object.values(profileModules).reduce<
  Record<string, MapRecommendationProfile>
>((profiles, profile) => {
  profiles[profile.mapName] = profile
  return profiles
}, {})

export const fallbackProfile = createMapRecommendationProfile({
  mapName: "Generic",
  mode: "All Modes",
  brawlers: {},
})

export function getRecommendationProfile(mapName: string | null | undefined) {
  if (!mapName) return fallbackProfile
  return recommendationProfiles[mapName] ?? fallbackProfile
}
