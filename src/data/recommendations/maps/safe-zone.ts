import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Safe Zone",
  mode: "Heist",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  brawlers: {
    // =========================
    // CORE PICKS
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
      counters: { Bull: 9, Darryl: 9, Chuck: 8 },
      stage: { early: 9.5, mid: 9.2, late: 9.0 },
      tags: ["1st-pick", "defender"],
    },
    Pierce: {
      mapFit: 9.3,
      versatility: 8.8,
      stage: { early: 9.2, mid: 9.0, late: 8.6 },
      tags: ["1st-pick", "safe-damage"],
    },
    Colt: {
      mapFit: 9.4,
      versatility: 8.8,
      counters: { HeistSafe: 9, Bull: 8, Darryl: 8 },
      stage: { early: 9.2, mid: 9.0, late: 8.9 },
      tags: ["1st-pick", "safe-damage"],
    },
    Crow: {
      mapFit: 9.0,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "flex"],
    },
    Penny: {
      mapFit: 9.0,
      versatility: 8.7,
      stage: { early: 8.8, mid: 8.9, late: 9.0 },
      tags: ["1st-pick", "safe-damage", "flex"],
    },

    // =========================
    // LAST PICKS (merged roles included)
    // =========================
    Edgar: {
      mapFit: 8.7,
      stage: { early: 5.8, mid: 7.7, late: 9.4 },
      tags: ["last-pick", "agro", "safe-damage"],
    },
    Alli: {
      mapFit: 8.6,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro", "flex"],
    },
    Lily: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 8.0, late: 9.3 },
      tags: ["last-pick", "agro", "safe-damage"],
    },
    Darryl: {
      mapFit: 8.8,
      counters: { Colette: 2, Otis: 1 },
      stage: { early: 6.2, mid: 7.8, late: 9.6 },
      tags: ["last-pick", "tank"],
    },
    Mico: {
      mapFit: 8.7,
      stage: { early: 6.4, mid: 7.9, late: 9.4 },
      tags: ["last-pick", "agro", "safe-damage"],
    },
    Carl: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 8.9 },
      tags: ["last-pick", "safe-damage"],
    },

    // =========================
    // DEFENDERS
    // =========================
    Otis: {
      mapFit: 9.0,
      versatility: 8.8,
      synergy: { Chuck: 8 },
      counters: { Bull: 9, Darryl: 9 },
      stage: { early: 8.9, mid: 9.0, late: 9.1 },
      tags: ["defender"],
    },
    Charlie: {
      mapFit: 8.8,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["defender"],
    },
    Clancy: {
      mapFit: 8.6,
      counters: { Bull: 8, Darryl: 7 },
      stage: { early: 8.5, mid: 8.6, late: 8.8 },
      tags: ["defender"],
    },
    Finx: {
      mapFit: 8.7,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Angelo: {
      mapFit: 8.8,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.9 },
      tags: ["defender"],
    },
    R_T: {
      mapFit: 8.9,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["defender"],
    },
    Spike: {
      mapFit: 8.7,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Maisie: {
      mapFit: 8.6,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["defender"],
    },
    Cordelius: {
      mapFit: 8.7,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Chester: {
      mapFit: 8.8,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.7, mid: 8.8, late: 8.9 },
      tags: ["defender"],
    },
    Eve: {
      mapFit: 8.7,
      counters: { Bull: 8, Darryl: 8 },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },

    // =========================
    // FLEX (merged duplicates fixed)
    // =========================
    Belle: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },
    Byron: {
      mapFit: 8.7,
      synergy: { Kaze: 8, Melodie: 8 },
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["flex", "support"],
    },
    Amber: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },
    Lola: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    "8-Bit": {
      mapFit: 8.7,
      stage: { early: 8.4, mid: 8.7, late: 8.9 },
      tags: ["flex"],
    },
    Griff: {
      mapFit: 9.0,
      stage: { early: 8.9, mid: 9.0, late: 8.9 },
      synergy: { Pierce: 8, Najia: 8 },
      tags: ["flex", "safe-damage"],
    },
    Sirius: {
      mapFit: 8.7,
      stage: { early: 8.7, mid: 8.6, late: 8.5 },
      tags: ["flex"],
    },
    Lumi: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    Najia: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.6 },
      tags: ["flex"],
    },

    // =========================
    // SAFE DAMAGE
    // =========================
    Kaze: {
      mapFit: 8.9,
      stage: { early: 8.8, mid: 8.9, late: 9.0 },
      tags: ["safe-damage"],
    },
    Melodie: {
      mapFit: 8.8,
      stage: { early: 6.6, mid: 8.1, late: 9.0 },
      tags: ["safe-damage"],
    },
    Chuck: {
      mapFit: 8.9,
      synergy: { Otis: 8 },
      stage: { early: 8.7, mid: 8.9, late: 9.1 },
      tags: ["safe-damage"],
    },
    Bull: {
      mapFit: 7.2,
      counters: { Colette: 1, Otis: 1 },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["safe-damage", "tank"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.2 },
      tags: ["safe-damage"],
    },
    Draco: {
      mapFit: 8.6,
      stage: { early: 6.8, mid: 8.2, late: 9.0 },
      tags: ["safe-damage"],
    },
    Bonnie: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["safe-damage"],
    },
    Brock: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["safe-damage"],
    },
  },

  notes:
    "Safe Zone is a control-heavy Heist map where consistency and lane stability matter more than burst. Draft a defender anchor, one flex scaling pick, and one safe damage win condition. Avoid overstacking roles; prioritize clean lane structure and tempo control.",
})