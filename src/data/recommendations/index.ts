import { createMapRecommendationProfile } from "./base"
import { loadStoredProfileOverrides } from "../adminStore"
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

  const baseProfile = recommendationProfiles[mapName] ?? fallbackProfile
  const storedOverrides = loadStoredProfileOverrides()
  const override = storedOverrides[mapName]

  if (!override) return baseProfile

  return createMapRecommendationProfile({
    ...baseProfile,
    ...override,
    weights: {
      ...(baseProfile.weights ?? {}),
      ...(override.weights ?? {}),
    },
    brawlers: {
      ...(baseProfile.brawlers ?? {}),
      ...(override.brawlers ?? {}),
    },
  })
}
