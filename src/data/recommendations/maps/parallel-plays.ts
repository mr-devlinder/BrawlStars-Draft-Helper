import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Parallel Plays",
  mode: "Hot Zone",
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
    Damian: {
      mapFit: 9.6,
      versatility: 9.0,
      stage: { early: 9.7, mid: 9.0, late: 8.5 },
      tags: ["1st-pick", "flex"],
    },
    Colette: {
      mapFit: 9.7,
      versatility: 9.0,
      counters: { Tank: 9 },
      stage: { early: 9.5, mid: 9.2, late: 9.0 },
      tags: ["1st-pick", "damage", "defense"],
    },
    Sirius: {
      mapFit: 9.0,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "flex"],
    },
    Crow: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "both"],
    },
    Leon: {
      mapFit: 9.0,
      versatility: 8.7,
      stage: { early: 8.8, mid: 8.9, late: 9.2 },
      tags: ["1st-pick", "offense"],
    },
    Meeple: {
      mapFit: 8.8,
      versatility: 8.6,
      stage: { early: 8.6, mid: 8.8, late: 8.7 },
      tags: ["1st-pick", "both"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Mortis: {
      mapFit: 8.5,
      stage: { early: 5.5, mid: 7.5, late: 9.2 },
      tags: ["last-pick", "offense"],
    },
    Edgar: {
      mapFit: 8.6,
      stage: { early: 5.7, mid: 7.6, late: 9.3 },
      tags: ["last-pick", "offense"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.1 },
      tags: ["last-pick", "offense"],
    },
    Shade: {
      mapFit: 8.4,
      stage: { early: 6.0, mid: 7.8, late: 9.0 },
      tags: ["last-pick", "offense"],
    },
    Cordelius: {
      mapFit: 8.7,
      stage: { early: 6.2, mid: 7.9, late: 9.3 },
      tags: ["last-pick", "offense"],
    },
    Ziggy: {
      mapFit: 8.2,
      stage: { early: 7.0, mid: 8.0, late: 8.7 },
      tags: ["last-pick", "offense"],
    },

    // =========================
    // DEFENSE
    // =========================
    Chester: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 9.0 },
      tags: ["defense"],
    },
    Emz: {
      mapFit: 8.8,
      stage: { early: 8.5, mid: 8.8, late: 8.9 },
      tags: ["defense"],
    },
    Otis: {
      mapFit: 9.0,
      stage: { early: 8.8, mid: 9.0, late: 9.1 },
      tags: ["defense"],
    },
    Charlie: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defense"],
    },
    Griff: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 8.9 },
      tags: ["defense"],
    },
    R_T: {
      mapFit: 8.9,
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["defense"],
    },
    Juju: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["defense"],
    },
    Willow: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["defense"],
    },
    Clancy: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["defense"],
    },
    Hank: {
      mapFit: 8.5,
      stage: { early: 7.0, mid: 8.0, late: 8.8 },
      tags: ["defense"],
    },

    // =========================
    // OFFENSE
    // =========================
    Mina: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["offense"],
    },
    Draco: {
      mapFit: 8.7,
      stage: { early: 6.5, mid: 8.0, late: 9.1 },
      tags: ["offense"],
    },
    Alli: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["offense"],
    },
    Kenji: {
      mapFit: 8.7,
      stage: { early: 6.8, mid: 8.2, late: 9.2 },
      tags: ["offense"],
    },
    Bull: {
      mapFit: 8.5,
      stage: { early: 5.8, mid: 7.2, late: 9.5 },
      tags: ["offense", "tank"],
    },
    Trunk: {
      mapFit: 8.4,
      stage: { early: 7.0, mid: 8.0, late: 8.8 },
      tags: ["offense"],
    },

    // =========================
    // BOTH (HYBRID POOL)
    // =========================
    Lumi: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["both"],
    },
    Moe: {
      mapFit: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["both"],
    },
    Pierce: {
      mapFit: 9.1,
      stage: { early: 9.0, mid: 9.1, late: 8.7 },
      tags: ["both"],
    },
    Najia: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["both"],
    },
    Stu: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.6 },
      tags: ["both"],
    },
    Glowy: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["both"],
    },
    Amber: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["both"],
    },
    Berry: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["both"],
    },
    Barley: {
      mapFit: 8.3,
      stage: { early: 7.0, mid: 8.2, late: 8.8 },
      tags: ["both"],
    },
    Spike: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["both"],
    },

    // =========================
    // OTHER PICKS
    // =========================
    Kaze: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.9 },
      tags: ["flex"],
    },
    Maisie: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["flex"],
    },
    Lily: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 8.0, late: 9.3 },
      tags: ["flex", "offense"],
    },
    Byron: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["flex", "support"],
    },
    Penny: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["flex"],
    },
  },

  notes:
    "Parallel Plays is a split Hot Zone map where drafts must balance offense pressure, defensive anchoring, and hybrid flexibility. Winning teams usually secure one defender, one offense pressure brawler, and one hybrid pick to control both zones dynamically.",
})