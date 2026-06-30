import type { MapRecommendationProfile, MapRecommendationWeights } from "./types"

const defaultWeights: MapRecommendationWeights = {
  mapFit: 1,
  versatility: 0.85,
  globalCounter: 1,
  globalFavor: 1,
  composition: 0.85,
  synergy: 0.95,
  counter: 1.1,
  stage: 0.65,
}

export function createMapRecommendationProfile(
  profile: MapRecommendationProfile,
): MapRecommendationProfile {
  return {
    ...profile,
    weights: {
      ...defaultWeights,
      ...profile.weights,
    },
    brawlers: profile.brawlers ?? {},
  }
}
