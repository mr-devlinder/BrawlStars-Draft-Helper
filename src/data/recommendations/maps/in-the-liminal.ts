import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "In The Liminal",
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
      tags: ["1st-pick", "damage", "control"],
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
      tags: ["1st-pick", "control", "damage"],
    },
    Chester: {
      mapFit: 9.1,
      versatility: 8.9,
      stage: { early: 8.9, mid: 9.0, late: 9.0 },
      tags: ["1st-pick", "zone-control"],
    },
    Pierce: {
      mapFit: 9.2,
      versatility: 8.8,
      stage: { early: 9.1, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "zone-control"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Mortis: {
      mapFit: 8.5,
      stage: { early: 5.5, mid: 7.5, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Edgar: {
      mapFit: 8.6,
      stage: { early: 5.7, mid: 7.6, late: 9.3 },
      tags: ["last-pick", "agro"],
    },
    Draco: {
      mapFit: 8.7,
      stage: { early: 6.5, mid: 8.0, late: 9.1 },
      tags: ["last-pick", "agro", "damage"],
    },
    Shade: {
      mapFit: 8.4,
      stage: { early: 6.0, mid: 7.8, late: 9.0 },
      tags: ["last-pick", "control"],
    },
    Barley: {
      mapFit: 8.3,
      stage: { early: 7.0, mid: 8.2, late: 8.8 },
      tags: ["last-pick", "control"],
    },
    Ziggy: {
      mapFit: 8.2,
      stage: { early: 7.0, mid: 8.0, late: 8.7 },
      tags: ["last-pick", "control"],
    },

    // =========================
    // ZONE TIME (CONTROL CORE)
    // =========================
    Finx: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["zone-control"],
    },
    Najia: {
      mapFit: 9.0,
      synergy: { Ruffs: 8, Griff: 8 },
      stage: { early: 8.8, mid: 9.0, late: 8.9 },
      tags: ["zone-control"],
    },
    Glowy: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["zone-control"],
    },
    Meeple: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.6 },
      tags: ["zone-control"],
    },
    Lou: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.7 },
      tags: ["zone-control"],
    },
    Bo: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["zone-control"],
    },
    Poco: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["zone-control", "support"],
    },
    Emz: {
      mapFit: 8.9,
      synergy: { Gray: 8 },
      stage: { early: 8.5, mid: 8.9, late: 9.0 },
      tags: ["zone-control", "damage"],
    },
    Meg: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["zone-control"],
    },
    Mina: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["zone-control"],
    },

    // =========================
    // DAMAGE / CONTROL
    // =========================
    Charlie: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["control"],
    },
    Otis: {
      mapFit: 9.0,
      stage: { early: 8.8, mid: 9.0, late: 9.1 },
      tags: ["control", "damage"],
    },
    Penny: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["control", "damage"],
    },
    Gray: {
      mapFit: 8.9,
      synergy: { Emz: 8, Draco: 7 },
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["control", "support"],
    },
    Clancy: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["control"],
    },
    Lumi: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["control"],
    },
    Griff: {
      mapFit: 8.9,
      synergy: { Najia: 8, Pierce: 8 },
      stage: { early: 8.7, mid: 8.9, late: 8.9 },
      tags: ["damage", "control"],
    },
    Byron: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.8 },
      tags: ["support"],
    },
    Ruffs: {
      mapFit: 8.8,
      synergy: { Najia: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["support"],
    },

    // =========================
    // AGRO
    // =========================
    Leon: {
      mapFit: 8.8,
      stage: { early: 7.5, mid: 8.5, late: 9.2 },
      tags: ["agro"],
    },
    Alli: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["agro"],
    },
    Hank: {
      mapFit: 8.4,
      stage: { early: 7.0, mid: 8.0, late: 8.8 },
      tags: ["agro"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.1 },
      tags: ["agro"],
    },
    Kenji: {
      mapFit: 8.7,
      stage: { early: 6.8, mid: 8.2, late: 9.2 },
      tags: ["agro"],
    },
    Bull: {
      mapFit: 8.5,
      stage: { early: 5.8, mid: 7.2, late: 9.5 },
      tags: ["agro", "tank"],
    },
    Fang: {
      mapFit: 8.6,
      stage: { early: 6.0, mid: 7.8, late: 9.3 },
      tags: ["agro"],
    },
  },

  notes:
    "Same as Dueling Beetles",
})