import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Center Stage",
  mode: "Brawl Ball",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  composition: [
    { tag: "tank-counter", count: 1, weight: 1.2 },
    { tag: "agro", count: 1, weight: 1.1 },
    { tag: "flex", count: 1, weight: 1.0 },
  ],

  brawlers: {
    // =========================
    // 1st PICKS
    // =========================
    Damian: {
      mapFit: 9.6,
      versatility: 9.0,
      stage: { early: 9.7, mid: 8.8, late: 7.9 },
      tags: ["1st-pick", "flex"],
    },
    Colette: {
      mapFit: 9.5,
      versatility: 8.8,
      counters: {
        Bull: 9,
        Frank: 9,
        Mortis: 7,
      },
      stage: { early: 9.4, mid: 9.0, late: 8.6 },
      tags: ["1st-pick", "tank-counter"],
    },
    Sirius: {
      mapFit: 9.3,
      versatility: 9.0,
      stage: { early: 9.4, mid: 8.7, late: 7.9 },
      tags: ["1st-pick", "flex"],
    },
    Crow: {
      mapFit: 9.2,
      versatility: 8.8,
      stage: { early: 9.2, mid: 8.9, late: 8.4 },
      tags: ["1st-pick", "agro"],
    },
    Chester: {
      mapFit: 9.1,
      versatility: 8.7,
      synergy: {
        Ruffs: 8,
        Meeple: 7,
      },
      counters: {
        Bull: 8,
        Frank: 8,
        Mortis: 7,
      },
      stage: { early: 9.0, mid: 8.7, late: 8.8 },
      tags: ["1st-pick", "flex", "agro"],
    },
    Otis: {
      mapFit: 9.0,
      versatility: 8.6,
      counters: {
        Bull: 9,
        Shelly: 8,
        Nita: 7,
        Griff: 7,
      },
      stage: { early: 8.8, mid: 8.9, late: 9.0 },
      tags: ["1st-pick", "tank-counter"],
    },

    // =========================
    // LAST PICK / AGRO
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
      mapFit: 7.0,
      counters: {
        Emz: 6,
        Colette: 1,
        Otis: 1,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.5 },
      tags: ["last-pick", "tank"],
    },
    Edgar: {
      mapFit: 7.2,
      counters: {
        Emz: 6,
        Shelly: 1,
        Colette: 2,
      },
      stage: { early: 5.5, mid: 7.0, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Shade: {
      mapFit: 8.7,
      counters: {
        Bull: 8,
        Frank: 8,
      },
      stage: { early: 6.0, mid: 7.8, late: 9.1 },
      tags: ["last-pick", "agro"],
    },
    Mortis: {
      mapFit: 8.6,
      counters: {
        Emz: 7,
      },
      stage: { early: 5.6, mid: 7.6, late: 9.0 },
      tags: ["last-pick", "agro"],
    },

    // =========================
    // FLEX / MID
    // =========================
    Pierce: {
      mapFit: 8.8,
      versatility: 8.9,
      synergy: {
        Griff: 8,
        Meeple: 8,
      },
      stage: { early: 9.0, mid: 8.8, late: 8.3 },
      tags: ["flex", "synergy"],
    },
    Najia: {
      mapFit: 8.7,
      versatility: 8.8,
      synergy: {
        Griff: 8,
      },
      stage: { early: 8.8, mid: 8.7, late: 8.1 },
      tags: ["flex", "synergy"],
    },
    Ruffs: {
      mapFit: 8.5,
      versatility: 8.7,
      synergy: {
        Chester: 8,
      },
      stage: { early: 8.9, mid: 8.8, late: 8.0 },
      tags: ["flex", "support"],
    },
    Meeple: {
      mapFit: 8.4,
      versatility: 8.4,
      synergy: {
        Chester: 8,
        Otis: 7,
      },
      stage: { early: 8.5, mid: 8.5, late: 8.1 },
      tags: ["flex", "support"],
    },

    // =========================
    // TANK COUNTERS / MID CONTROL
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
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Frank: 7,
      },
      stage: { early: 7.8, mid: 8.5, late: 8.7 },
      tags: ["tank-counter", "flex"],
    },
    Clancy: {
      mapFit: 8.4,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.4, mid: 8.4, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },
    Lumi: {
      mapFit: 8.3,
      counters: {
        Bull: 7,
        Frank: 7,
      },
      stage: { early: 7.3, mid: 8.2, late: 8.7 },
      tags: ["tank-counter", "flex"],
    },
    Nita: {
      mapFit: 8.2,
      counters: {
        Bull: 7,
        Shelly: 7,
      },
      stage: { early: 7.0, mid: 8.0, late: 8.6 },
      tags: ["tank-counter", "flex"],
    },
    Shelly: {
      mapFit: 8.1,
      counters: {
        Bull: 8,
        Frank: 8,
        Mortis: 6,
      },
      stage: { early: 6.8, mid: 7.9, late: 8.8 },
      tags: ["tank-counter", "flex"],
    },

    // =========================
    // SAFE PICKS
    // =========================
    Amber: {
      mapFit: 8.0,
      versatility: 8.4,
      stage: { early: 8.0, mid: 8.2, late: 8.1 },
      tags: ["safe-pick"],
    },
    Colt: {
      mapFit: 7.9,
      versatility: 8.5,
      stage: { early: 7.8, mid: 8.0, late: 8.0 },
      tags: ["safe-pick"],
    },
    Maisie: {
      mapFit: 7.8,
      versatility: 8.3,
      stage: { early: 7.5, mid: 7.8, late: 8.0 },
      tags: ["safe-pick"],
    },
    Moe: {
      mapFit: 7.8,
      versatility: 8.3,
      stage: { early: 7.4, mid: 7.8, late: 8.1 },
      tags: ["safe-pick"],
    },
    Stu: {
      mapFit: 7.7,
      versatility: 8.4,
      stage: { early: 7.5, mid: 7.7, late: 7.8 },
      tags: ["safe-pick"],
    },
    Willow: {
      mapFit: 7.6,
      versatility: 8.1,
      stage: { early: 7.2, mid: 7.6, late: 7.8 },
      tags: ["safe-pick"],
    },
    Ziggy: {
      mapFit: 7.6,
      versatility: 8.1,
      stage: { early: 7.1, mid: 7.5, late: 7.8 },
      tags: ["safe-pick"],
    },
  },

  notes:
    "Center Stage is a tank-counter and pressure-heavy Brawl Ball map. Prioritize 1 tank counter, 1 agro/pressure pick, and 1 flexible/synergy piece. Last pick should strongly counter enemy win conditions.",
})