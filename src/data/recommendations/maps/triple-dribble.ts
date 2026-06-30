import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Triple Dribble",
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
        Bibi: 8,
        Trunk: 8,
      },
      stage: { early: 9.4, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "tank-counter"],
    },
    Sirius: {
      mapFit: 9.4,
      versatility: 8.9,
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 9.4, mid: 8.8, late: 8.2 },
      tags: ["1st-pick", "tank-counter"],
    },
    Crow: {
      mapFit: 9.2,
      versatility: 8.9,
      stage: { early: 9.2, mid: 8.9, late: 8.5 },
      tags: ["1st-pick", "agro"],
    },
    Chester: {
      mapFit: 9.2,
      versatility: 8.8,
      synergy: {
        Meeple: 8,
        Willow: 8,
        Ruffs: 7,
      },
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 9.1, mid: 8.8, late: 8.8 },
      tags: ["1st-pick", "agro", "flex"],
    },
    Otis: {
      mapFit: 9.1,
      versatility: 8.7,
      synergy: {
        Meeple: 8,
        Willow: 8,
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
    Ziggy: {
      mapFit: 8.5,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.3, late: 8.4 },
      tags: ["last-pick", "flex"],
    },
    Bibi: {
      mapFit: 8.8,
      stage: { early: 6.7, mid: 8.1, late: 9.3 },
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
      stage: { early: 5.8, mid: 7.6, late: 9.3 },
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
    Lumi: {
      mapFit: 8.5,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.5, mid: 8.4, late: 8.8 },
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
    Emz: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 7.6, mid: 8.5, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },
    Cordelius: {
      mapFit: 8.4,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.5, mid: 8.4, late: 8.7 },
      tags: ["tank-counter", "agro"],
    },
    Bea: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 8.0, mid: 8.5, late: 8.7 },
      tags: ["tank-counter", "flex"],
    },

    // =========================
    // CONTROL / FLEX
    // =========================
    Meeple: {
      mapFit: 8.7,
      versatility: 8.6,
      synergy: {
        Chester: 8,
        Otis: 8,
      },
      stage: { early: 8.6, mid: 8.6, late: 8.3 },
      tags: ["flex"],
    },
    Willow: {
      mapFit: 8.6,
      versatility: 8.5,
      synergy: {
        Chester: 8,
        Otis: 8,
      },
      stage: { early: 8.5, mid: 8.5, late: 8.3 },
      tags: ["flex"],
    },
    Ruffs: {
      mapFit: 8.5,
      versatility: 8.6,
      stage: { early: 8.5, mid: 8.5, late: 8.3 },
      tags: ["flex"],
    },
    Stu: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.5, mid: 8.4, late: 8.3 },
      tags: ["flex", "agro"],
    },
    Leon: {
      mapFit: 8.8,
      versatility: 8.8,
      stage: { early: 8.9, mid: 8.7, late: 8.5 },
      tags: ["flex", "agro"],
    },
    Charlie: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.7 },
      tags: ["flex"],
    },
    Pierce: {
      mapFit: 8.8,
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
    Moe: {
      mapFit: 8.3,
      versatility: 8.4,
      stage: { early: 8.1, mid: 8.3, late: 8.2 },
      tags: ["flex"],
    },
    Spike: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.5 },
      tags: ["flex"],
    },

    // =========================
    // AGRO
    // =========================
    Kenji: {
      mapFit: 8.7,
      stage: { early: 6.8, mid: 8.2, late: 9.1 },
      tags: ["agro"],
    },
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
    Alli: {
      mapFit: 8.4,
      stage: { early: 6.5, mid: 8.0, late: 9.0 },
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
    Maisie: {
      mapFit: 8.0,
      versatility: 8.3,
      stage: { early: 7.8, mid: 8.0, late: 8.1 },
      tags: ["flex"],
    },
    Barley: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.2, late: 8.2 },
      tags: ["flex"],
    },
    "Larry & Lawrie": {
      mapFit: 8.3,
      versatility: 8.4,
      stage: { early: 8.2, mid: 8.3, late: 8.3 },
      tags: ["flex"],
    },
    Penny: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.0, mid: 8.2, late: 8.3 },
      tags: ["flex"],
    },
    Glowy: {
      mapFit: 8.1,
      versatility: 8.2,
      stage: { early: 8.0, mid: 8.1, late: 8.2 },
      tags: ["flex"],
    },
  },

  notes:
    "Triple Dribble rewards balanced drafting with strong anti-tank control and lane pressure. Prioritize one tank counter, one aggressive brawler, and one control or thrower. Pierce or Najia pair exceptionally well with Griff, while Meeple or Willow provide excellent support for Chester and Otis."
})