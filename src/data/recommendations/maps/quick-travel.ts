import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Quick Travel",
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
      tags: ["1st-pick", "flex", "both"],
    },
    Crow: {
      mapFit: 8.9,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "both"],
    },
    Chester: {
      mapFit: 9.1,
      versatility: 8.9,
      stage: { early: 8.9, mid: 9.0, late: 9.0 },
      tags: ["1st-pick", "defense"],
    },
    Emz: {
      mapFit: 8.9,
      versatility: 8.7,
      stage: { early: 8.5, mid: 8.9, late: 9.0 },
      tags: ["1st-pick", "defense"],
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
    Draco: {
      mapFit: 8.7,
      stage: { early: 6.5, mid: 8.0, late: 9.1 },
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
    Buzz: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "offense"],
    },

    // =========================
    // DEFENSE
    // =========================
    Finx: {
      mapFit: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.9 },
      tags: ["defense"],
    },
    Lou: {
      mapFit: 8.9,
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["defense"],
    },
    Poco: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["defense", "support"],
    },
    Meeple: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["defense"],
    },
    Lumi: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.7 },
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
    Clancy: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["defense"],
    },
    Griff: {
      mapFit: 8.9,
      synergy: { Najia: 8, Pierce: 8 },
      stage: { early: 8.7, mid: 8.9, late: 8.9 },
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
    Leon: {
      mapFit: 8.8,
      stage: { early: 7.5, mid: 8.5, late: 9.2 },
      tags: ["offense"],
    },
    Alli: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["offense"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.1 },
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
    Ruffs: {
      mapFit: 8.8,
      synergy: { Najia: 8, Pierce: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["both", "support"],
    },
    Amber: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["both"],
    },
    Gray: {
      mapFit: 8.9,
      synergy: { Emz: 8, Draco: 7 },
      stage: { early: 8.7, mid: 8.9, late: 8.8 },
      tags: ["both", "support"],
    },
    Pierce: {
      mapFit: 9.1,
      synergy: { Griff: 8 },
      stage: { early: 9.0, mid: 9.1, late: 8.8 },
      tags: ["both"],
    },
    Najia: {
      mapFit: 8.9,
      synergy: { Ruffs: 8, Griff: 8 },
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
    Spike: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["both"],
    },
    Nita: {
      mapFit: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["both"],
    },
    Berry: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["both"],
    },

    // =========================
    // OTHER PICKS
    // =========================
    Pam: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },
    Tara: {
      mapFit: 8.6,
      stage: { early: 8.4, mid: 8.6, late: 8.8 },
      tags: ["flex"],
    },
    Rosa: {
      mapFit: 8.5,
      stage: { early: 8.3, mid: 8.5, late: 8.7 },
      tags: ["flex"],
    },
    Maisie: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["flex"],
    },
    Meg: {
      mapFit: 8.8,
      stage: { early: 8.6, mid: 8.8, late: 8.9 },
      tags: ["flex"],
    },
    Rico: {
      mapFit: 8.7,
      stage: { early: 8.5, mid: 8.7, late: 8.8 },
      tags: ["flex"],
    },
  },

  notes:
    "Quick Travel is a fast-swing Hot Zone map where team composition must balance strong defensive anchors with high-tempo offensive pressure. Hybrid picks like Ruffs, Gray, and Spike are especially valuable for shifting between zones quickly.",
})