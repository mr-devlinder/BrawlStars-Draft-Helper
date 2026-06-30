import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Sneaky Fields",
  mode: "Brawl Ball",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  composition: [
    { tag: "tank-counter", count: 1, weight: 1.3 },
    { tag: "agro", count: 1, weight: 1.2 },
    { tag: "flex", count: 1, weight: 1.2 },
  ],

  brawlers: {
    // =========================
    // 1st PICKS
    // =========================
    Damian: {
      mapFit: 9.6,
      versatility: 9.0,
      stage: { early: 9.7, mid: 8.9, late: 8.0 },
      tags: ["1st-pick", "flex"],
    },
    Colette: {
      mapFit: 9.5,
      versatility: 8.8,
      counters: {
        Bull: 9,
        Frank: 9,
        Mortis: 7,
        Trunk: 8,
      },
      stage: { early: 9.4, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "tank-counter"],
    },
    Sirius: {
      mapFit: 9.4,
      versatility: 8.9,
      stage: { early: 9.4, mid: 8.8, late: 8.2 },
      tags: ["1st-pick", "tank-counter"],
    },
    Crow: {
      mapFit: 9.2,
      versatility: 8.8,
      stage: { early: 9.2, mid: 8.9, late: 8.5 },
      tags: ["1st-pick", "agro"],
    },
    Chester: {
      mapFit: 9.2,
      versatility: 8.8,
      synergy: {
        Meeple: 8,
        Ruffs: 8,
      },
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 9.1, mid: 8.8, late: 8.8 },
      tags: ["1st-pick", "flex", "agro"],
    },
    Otis: {
      mapFit: 9.1,
      versatility: 8.7,
      synergy: {
        Meeple: 7,
      },
      counters: {
        Bull: 9,
        Frank: 8,
      },
      stage: { early: 8.9, mid: 8.9, late: 9.0 },
      tags: ["1st-pick", "tank-counter"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Alli: {
      mapFit: 8.9,
      stage: { early: 6.5, mid: 8.0, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Bibi: {
      mapFit: 8.8,
      stage: { early: 6.8, mid: 8.1, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Bull: {
      mapFit: 7.2,
      counters: {
        Colette: 1,
        Otis: 1,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["last-pick", "agro"],
    },
    Edgar: {
      mapFit: 8.7,
      stage: { early: 5.7, mid: 7.6, late: 9.3 },
      tags: ["last-pick", "agro"],
    },
    Shade: {
      mapFit: 8.7,
      stage: { early: 6.2, mid: 7.9, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Mortis: {
      mapFit: 8.6,
      stage: { early: 5.8, mid: 7.8, late: 9.2 },
      tags: ["last-pick", "agro"],
    },

    // =========================
    // TANK COUNTERS
    // =========================
    Emz: {
      mapFit: 8.6,
      counters: {
        Bull: 8,
        Frank: 8,
        Mortis: 7,
      },
      stage: { early: 7.5, mid: 8.5, late: 8.9 },
      tags: ["tank-counter", "flex"],
    },
    Griff: {
      mapFit: 8.6,
      synergy: {
        Pierce: 8,
        Najia: 8,
      },
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 7.8, mid: 8.6, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },
    Clancy: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Frank: 7,
      },
      stage: { early: 7.6, mid: 8.5, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },
    Lumi: {
      mapFit: 8.4,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.4, mid: 8.3, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },
    Nita: {
      mapFit: 8.3,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.2, mid: 8.1, late: 8.7 },
      tags: ["tank-counter", "flex"],
    },
    Shelly: {
      mapFit: 8.2,
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 7.0, mid: 8.0, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },

    // =========================
    // MID / FLEX
    // =========================
    Pierce: {
      mapFit: 8.9,
      versatility: 8.9,
      synergy: {
        Griff: 8,
      },
      stage: { early: 9.0, mid: 8.8, late: 8.4 },
      tags: ["flex", "synergy"],
    },
    Najia: {
      mapFit: 8.8,
      versatility: 8.8,
      synergy: {
        Griff: 8,
      },
      stage: { early: 8.9, mid: 8.8, late: 8.3 },
      tags: ["flex", "synergy"],
    },
    Ruffs: {
      mapFit: 8.5,
      versatility: 8.7,
      synergy: {
        Chester: 8,
      },
      stage: { early: 8.6, mid: 8.6, late: 8.3 },
      tags: ["flex"],
    },
    Meeple: {
      mapFit: 8.5,
      versatility: 8.5,
      synergy: {
        Chester: 8,
        Otis: 7,
      },
      stage: { early: 8.5, mid: 8.5, late: 8.2 },
      tags: ["flex"],
    },
    Leon: {
      mapFit: 8.8,
      versatility: 8.7,
      stage: { early: 8.9, mid: 8.7, late: 8.5 },
      tags: ["flex", "agro"],
    },
    Max: {
      mapFit: 8.5,
      versatility: 8.8,
      stage: { early: 8.6, mid: 8.7, late: 8.5 },
      tags: ["flex"],
    },
    Charlie: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    Poco: {
      mapFit: 8.3,
      versatility: 8.6,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["flex"],
    },
    Rico: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.7, mid: 8.7, late: 8.6 },
      tags: ["flex"],
    },

    // =========================
    // AGRO
    // =========================
    Frank: {
      mapFit: 8.3,
      stage: { early: 6.3, mid: 8.2, late: 9.0 },
      tags: ["agro", "tank"],
    },
    Mina: {
      mapFit: 8.3,
      stage: { early: 6.8, mid: 8.0, late: 8.8 },
      tags: ["agro"],
    },
    Lily: {
      mapFit: 8.3,
      stage: { early: 6.5, mid: 8.0, late: 8.9 },
      tags: ["agro"],
    },
    Kenji: {
      mapFit: 8.6,
      stage: { early: 6.8, mid: 8.2, late: 9.1 },
      tags: ["agro"],
    },
    Trunk: {
      mapFit: 8.3,
      stage: { early: 6.7, mid: 8.0, late: 8.9 },
      tags: ["agro", "tank"],
    },

    // =========================
    // OTHER PICKS
    // =========================
    Colt: {
      mapFit: 8.0,
      versatility: 8.4,
      stage: { early: 7.9, mid: 8.1, late: 8.0 },
      tags: ["flex"],
    },
    Maisie: {
      mapFit: 7.9,
      versatility: 8.3,
      stage: { early: 7.7, mid: 7.9, late: 8.1 },
      tags: ["flex"],
    },
    Moe: {
      mapFit: 7.9,
      versatility: 8.2,
      stage: { early: 7.8, mid: 8.0, late: 8.1 },
      tags: ["flex"],
    },
    Stu: {
      mapFit: 7.9,
      versatility: 8.4,
      stage: { early: 7.9, mid: 8.0, late: 8.0 },
      tags: ["flex"],
    },
    Willow: {
      mapFit: 7.8,
      versatility: 8.2,
      stage: { early: 7.7, mid: 7.9, late: 8.0 },
      tags: ["flex"],
    },
    Ziggy: {
      mapFit: 7.8,
      versatility: 8.2,
      stage: { early: 7.7, mid: 7.9, late: 8.0 },
      tags: ["flex"],
    },
  },

  notes:
    "Sneaky Fields is a balanced Brawl Ball map where anti-tank control is extremely valuable. Prioritize one dedicated tank counter, one aggressive pressure pick, and one flexible mid. Pierce or Najia pair well with Griff, Meeple greatly enhances Chester or Otis, and Ruffs is strongest when supporting Chester.",
})