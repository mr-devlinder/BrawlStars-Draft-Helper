import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Shooting Star",
  mode: "Bounty",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  brawlers: {
    // =========================
    // 1st PICKS
    // =========================
    Leon: {
      mapFit: 9.6,
      versatility: 9.0,
      stage: { early: 9.4, mid: 9.0, late: 8.8 },
      tags: ["1st-pick", "agro"],
    },
    Gene: {
      mapFit: 9.5,
      versatility: 9.2,
      synergy: {
        "R-T": 8,
      },
      stage: { early: 9.3, mid: 9.2, late: 8.9 },
      tags: ["1st-pick", "support"],
    },
    Pierce: {
      mapFit: 9.4,
      versatility: 9.0,
      stage: { early: 9.5, mid: 9.1, late: 8.6 },
      tags: ["1st-pick", "range"],
    },
    Nani: {
      mapFit: 9.3,
      versatility: 8.9,
      stage: { early: 9.4, mid: 9.1, late: 8.8 },
      tags: ["1st-pick", "sniper"],
    },
    Najia: {
      mapFit: 9.2,
      versatility: 8.9,
      stage: { early: 9.2, mid: 8.9, late: 8.5 },
      tags: ["1st-pick", "range"],
    },
    Colette: {
      mapFit: 9.1,
      versatility: 8.7,
      stage: { early: 9.0, mid: 8.8, late: 8.5 },
      tags: ["1st-pick", "flex"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Fang: {
      mapFit: 8.5,
      stage: { early: 6.1, mid: 7.9, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Edgar: {
      mapFit: 8.4,
      stage: { early: 5.8, mid: 7.6, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Kit: {
      mapFit: 8.7,
      synergy: {
        Mortis: 9,
        Kaze: 9,
      },
      stage: { early: 7.0, mid: 8.3, late: 9.1 },
      tags: ["last-pick", "agro", "synergy"],
    },
    Damian: {
      mapFit: 8.6,
      versatility: 8.8,
      stage: { early: 8.8, mid: 8.6, late: 8.3 },
      tags: ["last-pick", "flex"],
    },
    Penny: {
      mapFit: 8.3,
      versatility: 8.2,
      stage: { early: 7.7, mid: 8.2, late: 8.5 },
      tags: ["last-pick", "range"],
    },
    Sirius: {
      mapFit: 8.5,
      versatility: 8.7,
      stage: { early: 8.7, mid: 8.6, late: 8.3 },
      tags: ["last-pick", "flex"],
    },

    // =========================
    // RANGE
    // =========================
    Belle: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.9, late: 8.8 },
      tags: ["range", "sniper"],
    },
    Byron: {
      mapFit: 8.8,
      versatility: 8.7,
      stage: { early: 8.9, mid: 8.8, late: 8.6 },
      tags: ["range", "support"],
    },
    "R-T": {
      mapFit: 8.8,
      synergy: {
        Gene: 8,
      },
      stage: { early: 8.9, mid: 8.9, late: 8.8 },
      tags: ["range", "control"],
    },
    Gus: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.5, mid: 8.5, late: 8.6 },
      tags: ["range", "support"],
    },
    Angelo: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.1, mid: 8.9, late: 8.8 },
      tags: ["range", "sniper"],
    },
    Brock: {
      mapFit: 8.8,
      versatility: 8.7,
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["range", "wall-break"],
    },
    Mandy: {
      mapFit: 8.8,
      versatility: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["range", "sniper"],
    },
    Piper: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.9, late: 8.8 },
      tags: ["range", "sniper"],
    },

    // =========================
    // FLEX
    // =========================
    Charlie: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.6 },
      tags: ["flex", "control"],
    },
    Crow: {
      mapFit: 8.7,
      versatility: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.6 },
      tags: ["flex", "pressure"],
    },
    Gray: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["flex", "support"],
    },
    Meeple: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["flex", "support"],
    },
    Glowy: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.0, mid: 8.2, late: 8.3 },
      tags: ["flex"],
    },
    Squeak: {
      mapFit: 8.5,
      versatility: 8.4,
      stage: { early: 8.3, mid: 8.5, late: 8.7 },
      tags: ["flex", "control"],
    },
    Ziggy: {
      mapFit: 8.2,
      versatility: 8.2,
      stage: { early: 8.0, mid: 8.2, late: 8.3 },
      tags: ["flex"],
    },
    "8-Bit": {
      mapFit: 8.5,
      versatility: 8.6,
      stage: { early: 8.1, mid: 8.6, late: 8.8 },
      tags: ["flex", "damage"],
    },
    Sprout: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.6 },
      tags: ["flex", "control"],
    },

    // =========================
    // BLUE STAR / AGRO
    // =========================
    Mortis: {
      mapFit: 8.8,
      synergy: {
        Kit: 9,
      },
      stage: { early: 5.8, mid: 7.8, late: 9.4 },
      tags: ["blue-star", "agro"],
    },
    Kaze: {
      mapFit: 8.7,
      synergy: {
        Kit: 9,
      },
      stage: { early: 6.0, mid: 8.0, late: 9.3 },
      tags: ["blue-star", "agro"],
    },
    Carl: {
      mapFit: 8.4,
      stage: { early: 7.1, mid: 8.3, late: 8.8 },
      tags: ["agro"],
    },
    "Jae-yong": {
      mapFit: 8.3,
      stage: { early: 7.2, mid: 8.2, late: 8.7 },
      tags: ["agro"],
    },
    Mina: {
      mapFit: 8.2,
      stage: { early: 6.8, mid: 8.0, late: 8.6 },
      tags: ["agro"],
    },
    Melodie: {
      mapFit: 8.5,
      stage: { early: 7.2, mid: 8.3, late: 9.0 },
      tags: ["agro"],
    },
    Ollie: {
      mapFit: 8.4,
      stage: { early: 7.2, mid: 8.2, late: 8.8 },
      tags: ["agro"],
    },
    Max: {
      mapFit: 8.6,
      versatility: 8.7,
      stage: { early: 8.2, mid: 8.6, late: 8.8 },
      tags: ["agro", "support"],
    },
  },

  notes:
    "Shooting Star is a sniper-focused Bounty map. Prioritize one blue-star/aggressive brawler, one long-range sniper, and one flexible support or control pick. Gene + R-T remains a premier control combination, while Kit enables assassin compositions with Mortis or Kaze."
})