import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Dry Season",
  mode: "Bounty",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  composition: [
    { tag: "agro", count: 1, weight: 1.2 },
    { tag: "range", count: 1, weight: 1.1 },
    { tag: "flex", count: 1, weight: 1.0 },
  ],
  
  brawlers: {
    // =========================
    // 1st PICKS (PRIORITY CORE)
    // =========================
    Damian: {
      mapFit: 9.5,
      versatility: 9.0,
      stage: { early: 9.6, mid: 9.0, late: 8.2 },
      tags: ["1st-pick", "flex"],
    },
    Colette: {
      mapFit: 9.4,
      versatility: 8.8,
      stage: { early: 9.3, mid: 9.0, late: 8.5 },
      tags: ["1st-pick", "flex"],
    },
    Leon: {
      mapFit: 9.3,
      versatility: 8.9,
      stage: { early: 9.2, mid: 8.9, late: 8.6 },
      tags: ["1st-pick", "agro"],
    },
    Gene: {
      mapFit: 9.2,
      versatility: 9.1,
      synergy: {
        "R-T": 8,
      },
      stage: { early: 9.1, mid: 9.0, late: 8.8 },
      tags: ["1st-pick", "range"],
    },
    Pierce: {
      mapFit: 9.1,
      versatility: 9.0,
      stage: { early: 9.3, mid: 9.0, late: 8.4 },
      tags: ["1st-pick", "range"],
    },
    Najia: {
      mapFit: 9.0,
      versatility: 8.9,
      stage: { early: 9.1, mid: 8.8, late: 8.3 },
      tags: ["1st-pick", "range"],
    },

    // =========================
    // 6th PICKS (LAST PICK PRESSURE)
    // =========================
    Fang: {
      mapFit: 8.4,
      stage: { early: 6.0, mid: 7.8, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Edgar: {
      mapFit: 8.3,
      stage: { early: 5.8, mid: 7.6, late: 9.1 },
      tags: ["last-pick", "agro"],
    },
    Kit: {
      mapFit: 8.6,
      synergy: {
        Mortis: 9,
        Kaze: 9,
      },
      stage: { early: 7.0, mid: 8.2, late: 9.0 },
      tags: ["last-pick", "agro", "synergy"],
    },
    Lily: {
      mapFit: 8.2,
      stage: { early: 6.2, mid: 7.8, late: 9.1 },
      tags: ["last-pick", "agro"],
    },
    Penny: {
      mapFit: 8.1,
      stage: { early: 7.2, mid: 8.0, late: 8.6 },
      tags: ["last-pick", "range"],
    },
    Sirius: {
      mapFit: 8.5,
      stage: { early: 8.8, mid: 8.6, late: 8.2 },
      tags: ["last-pick", "flex"],
    },

    // =========================
    // RANGE / LONG CONTROL
    // =========================
    Nani: {
      mapFit: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["range"],
    },
    Belle: {
      mapFit: 8.9,
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["range"],
    },
    Byron: {
      mapFit: 8.7,
      stage: { early: 8.8, mid: 8.7, late: 8.6 },
      tags: ["range"],
    },
    "R-T": {
      mapFit: 8.9,
      synergy: {
        Gene: 8,
      },
      stage: { early: 8.8, mid: 8.9, late: 8.8 },
      tags: ["range", "flex"],
    },
    Gus: {
      mapFit: 8.4,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["range", "range"],
    },
    Angelo: {
      mapFit: 8.9,
      stage: { early: 9.0, mid: 8.9, late: 8.7 },
      tags: ["range",],
    },
    Brock: {
      mapFit: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["range", "wall-break"],
    },
    Mandy: {
      mapFit: 8.7,
      stage: { early: 8.8, mid: 8.7, late: 8.6 },
      tags: ["range",],
    },
    Piper: {
      mapFit: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["range",],
    },

    // =========================
    // FLEX / MID CONTROL
    // =========================
    Charlie: {
      mapFit: 8.3,
      stage: { early: 8.0, mid: 8.3, late: 8.6 },
      tags: ["flex"],
    },
    Crow: {
      mapFit: 8.6,
      stage: { early: 8.8, mid: 8.7, late: 8.5 },
      tags: ["flex", "agro"],
    },
    Gray: {
      mapFit: 8.2,
      stage: { early: 8.0, mid: 8.2, late: 8.4 },
      tags: ["flex", "range"],
    },
    Meeple: {
      mapFit: 8.3,
      stage: { early: 8.2, mid: 8.3, late: 8.4 },
      tags: ["flex", "range"],
    },
    Glowy: {
      mapFit: 8.0,
      stage: { early: 7.8, mid: 8.0, late: 8.2 },
      tags: ["flex"],
    },
    Squeak: {
      mapFit: 8.4,
      stage: { early: 8.2, mid: 8.4, late: 8.6 },
      tags: ["flex"],
    },
    Ziggy: {
      mapFit: 8.1,
      stage: { early: 7.9, mid: 8.1, late: 8.3 },
      tags: ["flex"],
    },
    "8-Bit": {
      mapFit: 8.5,
      stage: { early: 8.0, mid: 8.6, late: 8.7 },
      tags: ["flex", "range"],
    },
    Sprout: {
      mapFit: 8.3,
      stage: { early: 8.1, mid: 8.3, late: 8.5 },
      tags: ["flex"],
    },

    // =========================
    // BLUE STAR / AGRO
    // =========================
    Mortis: {
      mapFit: 8.7,
      synergy: {
        Kit: 9,
      },
      stage: { early: 5.8, mid: 7.8, late: 9.3 },
      tags: ["agro"],
    },
    Kaze: {
      mapFit: 8.6,
      synergy: {
        Kit: 9,
      },
      stage: { early: 6.0, mid: 7.9, late: 9.2 },
      tags: ["agro"],
    },
    Carl: {
      mapFit: 8.3,
      stage: { early: 7.0, mid: 8.2, late: 8.8 },
      tags: ["agro"],
    },
    "Jae-yong": {
      mapFit: 8.2,
      stage: { early: 7.2, mid: 8.1, late: 8.7 },
      tags: ["agro"],
    },
    Mina: {
      mapFit: 8.1,
      stage: { early: 6.8, mid: 8.0, late: 8.6 },
      tags: ["agro"],
    },
    Melodie: {
      mapFit: 8.5,
      stage: { early: 7.0, mid: 8.2, late: 9.0 },
      tags: ["agro"],
    },
    Ollie: {
      mapFit: 8.4,
      stage: { early: 7.1, mid: 8.1, late: 8.9 },
      tags: ["agro"],
    },
    Max: {
      mapFit: 8.6,
      stage: { early: 8.0, mid: 8.5, late: 8.7 },
      tags: ["agro", "range"],
    },
  },

  notes:
    "Dry Season is a long-range Bounty map. Prioritizrange control first, then flex range, then blue-star/aggressive picks. Gene + R-T is a key control synergy, and Kit enables hyper-aggressive assassin dives with Mortis or Kaze.",
})