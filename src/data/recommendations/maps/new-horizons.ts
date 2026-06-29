import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "New Horizons",
  mode: "Knockout",
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
      mapFit: 9.2,
      versatility: 9.0,
      stage: { early: 9.0, mid: 9.1, late: 8.9 },
      tags: ["1st-pick", "range", "control"],
    },

    Colette: {
      mapFit: 9.4,
      versatility: 9.0,
      counters: { Tank: 9 },
      stage: { early: 9.3, mid: 9.2, late: 9.0 },
      tags: ["1st-pick", "damage", "control"],
    },

    Damian: {
      mapFit: 9.3,
      versatility: 9.0,
      stage: { early: 9.5, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "flex"],
    },

    Sirius: {
      mapFit: 9.0,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "control"],
    },

    Leon: {
      mapFit: 9.0,
      versatility: 8.7,
      stage: { early: 8.7, mid: 8.9, late: 9.2 },
      tags: ["1st-pick", "agro"],
    },

    Najia: {
      mapFit: 9.1,
      versatility: 8.8,
      synergy: { Ruffs: 8, Griff: 8 },
      stage: { early: 8.8, mid: 9.0, late: 8.9 },
      tags: ["1st-pick", "range"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Edgar: {
      mapFit: 8.6,
      stage: { early: 5.7, mid: 7.6, late: 9.3 },
      tags: ["last-pick", "agro"],
    },

    Kit: {
      mapFit: 8.7,
      stage: { early: 6.5, mid: 8.0, late: 9.3 },
      tags: ["last-pick", "agro"],
    },

    Ziggy: {
      mapFit: 8.3,
      stage: { early: 7.0, mid: 8.0, late: 8.7 },
      tags: ["last-pick", "range"],
    },

    Penny: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.7, late: 8.8 },
      tags: ["last-pick", "control"],
    },

    Alli: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro"],
    },

    Tick: {
      mapFit: 8.4,
      stage: { early: 8.2, mid: 8.5, late: 8.6 },
      tags: ["last-pick", "control"],
    },

    // =========================
    // FLEX
    // =========================
    Meeple: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["flex"],
    },

    Charlie: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["flex"],
    },

    Jae_yong: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },

    Gray: {
      mapFit: 8.9,
      synergy: { Doug: 8 },
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["flex", "support"],
    },

    Squeak: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },

    Crow: {
      mapFit: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["flex", "control"],
    },

    Ruffs: {
      mapFit: 8.8,
      synergy: { Najia: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["flex", "support"],
    },

    Pearl: {
      mapFit: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },

    Emz: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.8, late: 8.9 },
      tags: ["flex", "control"],
    },

    // =========================
    // RANGE
    // =========================
    Pierce: {
      mapFit: 9.1,
      stage: { early: 9.0, mid: 9.1, late: 8.7 },
      tags: ["range"],
    },

    Brock: {
      mapFit: 9.0,
      synergy: { Rico: 8 },
      stage: { early: 9.0, mid: 9.0, late: 8.8 },
      tags: ["range"],
    },

    Angelo: {
      mapFit: 8.9,
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["range"],
    },

    R_T: {
      mapFit: 8.9,
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["range"],
    },

    Glowy: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["range"],
    },

    Belle: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["range"],
    },

    Byron: {
      mapFit: 8.9,
      synergy: { Doug: 8 },
      stage: { early: 8.6, mid: 8.9, late: 8.8 },
      tags: ["range", "support"],
    },

    Gus: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["range", "support"],
    },

    // =========================
    // ENDING / AGRO
    // =========================
    Mortis: {
      mapFit: 8.5,
      stage: { early: 5.5, mid: 7.5, late: 9.2 },
      tags: ["agro"],
    },

    Mina: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["agro"],
    },

    Ollie: {
      mapFit: 8.6,
      stage: { early: 6.8, mid: 8.0, late: 9.0 },
      tags: ["agro"],
    },

    Buster: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["agro"],
    },

    Fang: {
      mapFit: 8.6,
      stage: { early: 6.0, mid: 7.8, late: 9.3 },
      tags: ["agro"],
    },

    Doug: {
      mapFit: 8.7,
      synergy: { Gray: 8, Byron: 8 },
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["agro"],
    },

    Darryl: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 7.8, late: 9.2 },
      tags: ["agro"],
    },

    Lily: {
      mapFit: 8.7,
      stage: { early: 6.8, mid: 8.0, late: 9.3 },
      tags: ["agro"],
    },
  },

  notes:
    "New Horizons is a structured Knockout map where mid-range control and late-game cleanup assassins decide rounds. Drafts should prioritize one stable range/control core plus a single finishing agro threat.",
})