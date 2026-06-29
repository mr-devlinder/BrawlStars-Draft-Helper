import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Ring Of Fire",
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
    // CORE 1st PICKS
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
      tags: ["1st-pick", "zone-time", "damage", "control"],
    },

    Sirius: {
      mapFit: 9.0,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "damage", "control"],
    },

    Crow: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "damage", "control"],
    },

    Chester: {
      mapFit: 9.1,
      versatility: 8.9,
      stage: { early: 8.9, mid: 9.0, late: 9.0 },
      tags: ["1st-pick", "zone-time"],
    },

    Pierce: {
      mapFit: 9.2,
      versatility: 8.8,
      synergy: { Griff: 8, Ruffs: 8, Najia: 8 },
      stage: { early: 9.1, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "zone-time"],
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

    Alli: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro"],
    },

    Draco: {
      mapFit: 8.7,
      stage: { early: 6.5, mid: 8.0, late: 9.1 },
      tags: ["last-pick", "agro"],
    },

    Fang: {
      mapFit: 8.6,
      stage: { early: 6.0, mid: 7.8, late: 9.3 },
      tags: ["last-pick", "agro"],
    },

    Bull: {
      mapFit: 8.5,
      stage: { early: 5.8, mid: 7.2, late: 9.5 },
      tags: ["last-pick", "agro"],
    },

    // =========================
    // ZONE TIME CORE
    // =========================
    Pam: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["zone-time"],
    },

    Finx: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.9 },
      tags: ["zone-time"],
    },

    Najia: {
      mapFit: 9.0,
      synergy: { Ruffs: 8, Griff: 8, Pierce: 8 },
      stage: { early: 8.8, mid: 9.0, late: 8.9 },
      tags: ["zone-time"],
    },

    Glowy: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["zone-time"],
    },

    Lou: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["zone-time"],
    },

    Bo: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["zone-time"],
    },

    Lola: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["zone-time"],
    },

    Meg: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["zone-time"],
    },

    Poco: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["zone-time", "support"],
    },

    // =========================
    // DAMAGE / CONTROL
    // =========================
    Meeple: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["control"],
    },

    Charlie: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
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
      tags: ["control"],
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

    Juju: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
      tags: ["control"],
    },

    Byron: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.8 },
      tags: ["support"],
    },

    Griff: {
      mapFit: 8.9,
      synergy: { Najia: 8, Pierce: 8 },
      stage: { early: 8.7, mid: 8.9, late: 8.9 },
      tags: ["control", "damage", "support"],
    },

    // =========================
    // OTHER
    // =========================
    Emz: {
      mapFit: 8.8,
      stage: { early: 8.5, mid: 8.8, late: 8.9 },
      tags: ["control"],
    },

    Ruffs: {
      mapFit: 8.8,
      synergy: { Najia: 8, Pierce: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["support"],
    },

    Gus: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["support"],
    },

    Spike: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["control"],
    },
  },

  notes:
    "Ring Of Fire is a high-commitment Hot Zone map where double-zone pressure and sustained control win fights. Drafts should secure at least one zone anchor, one control/damage hybrid, and one aggressive finisher for cleanup.",
})