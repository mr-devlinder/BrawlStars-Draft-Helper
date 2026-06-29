import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Layer Cake",
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
    Gene: {
      mapFit: 9.5,
      versatility: 9.2,
      stage: { early: 9.4, mid: 9.2, late: 8.9 },
      tags: ["1st-pick", "support"],
    },
    Colette: {
      mapFit: 9.4,
      versatility: 8.8,
      counters: {
        Buster: 8,
      },
      stage: { early: 9.3, mid: 9.0, late: 8.6 },
      tags: ["1st-pick", "tank-counter"],
    },
    Damian: {
      mapFit: 9.4,
      versatility: 9.0,
      stage: { early: 9.5, mid: 8.9, late: 8.2 },
      tags: ["1st-pick", "flex"],
    },
    Sirius: {
      mapFit: 9.3,
      versatility: 8.9,
      counters: {
        Buster: 8,
      },
      stage: { early: 9.3, mid: 8.9, late: 8.5 },
      tags: ["1st-pick", "tank-counter"],
    },
    Leon: {
      mapFit: 9.2,
      versatility: 8.8,
      stage: { early: 9.1, mid: 8.8, late: 8.7 },
      tags: ["1st-pick", "agro"],
    },
    Najia: {
      mapFit: 9.1,
      versatility: 8.9,
      stage: { early: 9.1, mid: 8.8, late: 8.5 },
      tags: ["1st-pick", "range"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Shade: {
      mapFit: 8.6,
      stage: { early: 6.3, mid: 7.9, late: 9.2 },
      tags: ["last-pick", "pressure"],
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
    Ziggy: {
      mapFit: 8.4,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.3, late: 8.4 },
      tags: ["last-pick", "flex"],
    },
    Penny: {
      mapFit: 8.3,
      versatility: 8.2,
      stage: { early: 7.7, mid: 8.2, late: 8.5 },
      tags: ["last-pick", "range"],
    },
    Alli: {
      mapFit: 8.3,
      stage: { early: 6.2, mid: 7.8, late: 9.0 },
      tags: ["last-pick", "agro"],
    },

    // =========================
    // TANK COUNTERS
    // =========================
    Crow: {
      mapFit: 8.8,
      counters: {
        Buster: 8,
      },
      stage: { early: 8.9, mid: 8.8, late: 8.5 },
      tags: ["tank-counter", "pressure"],
    },
    Charlie: {
      mapFit: 8.6,
      counters: {
        Buster: 8,
      },
      stage: { early: 8.3, mid: 8.6, late: 8.8 },
      tags: ["tank-counter", "control"],
    },
    Chester: {
      mapFit: 8.5,
      counters: {
        Buster: 8,
      },
      stage: { early: 8.4, mid: 8.5, late: 8.7 },
      tags: ["tank-counter", "pressure"],
    },
    Emz: {
      mapFit: 8.5,
      counters: {
        Buster: 8,
      },
      stage: { early: 8.0, mid: 8.5, late: 8.9 },
      tags: ["tank-counter", "control"],
    },

    // =========================
    // FLEX / RANGE
    // =========================
    Pierce: {
      mapFit: 8.9,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.5 },
      tags: ["flex", "range"],
    },
    Gray: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["flex", "support"],
    },
    Squeak: {
      mapFit: 8.4,
      versatility: 8.4,
      stage: { early: 8.2, mid: 8.4, late: 8.6 },
      tags: ["flex", "control"],
    },
    Meeple: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.4, late: 8.5 },
      tags: ["flex", "support"],
    },
    Glowy: {
      mapFit: 8.2,
      versatility: 8.2,
      stage: { early: 8.0, mid: 8.2, late: 8.3 },
      tags: ["flex"],
    },
    Belle: {
      mapFit: 8.7,
      versatility: 8.7,
      stage: { early: 8.8, mid: 8.7, late: 8.6 },
      tags: ["range", "sniper"],
    },
    Byron: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.7, mid: 8.6, late: 8.5 },
      tags: ["range", "support"],
    },
    Ruffs: {
      mapFit: 8.4,
      versatility: 8.6,
      stage: { early: 8.5, mid: 8.5, late: 8.4 },
      tags: ["flex", "support"],
    },

    // =========================
    // BLUE STAR / AGRO
    // =========================
    Mortis: {
      mapFit: 8.8,
      synergy: {
        Kit: 9,
      },
      stage: { early: 5.9, mid: 7.9, late: 9.4 },
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
      stage: { early: 7.1, mid: 8.2, late: 8.7 },
      tags: ["agro"],
    },
    Mina: {
      mapFit: 8.2,
      stage: { early: 6.8, mid: 8.0, late: 8.6 },
      tags: ["agro"],
    },
    Fang: {
      mapFit: 8.4,
      stage: { early: 6.2, mid: 7.8, late: 9.1 },
      tags: ["agro"],
    },
    Lily: {
      mapFit: 8.2,
      stage: { early: 6.2, mid: 7.8, late: 9.0 },
      tags: ["agro"],
    },
    Ollie: {
      mapFit: 8.4,
      stage: { early: 7.2, mid: 8.2, late: 8.8 },
      tags: ["agro"],
    },
    Buster: {
      mapFit: 8.5,
      stage: { early: 7.8, mid: 8.5, late: 8.7 },
      tags: ["agro", "tank"],
    },
  },

  notes:
    "Layer Cake is a balanced Bounty map with strong emphasis on blue-star control and flexible drafting. Prioritize one blue-star/aggressive pick, one tank counter, and one flexible range/support brawler. Kit pairs exceptionally well with Mortis and Kaze for assassin-focused compositions."
})