import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Pit Stop",
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
    // 1ST PICKS
    // =========================
    Damian: {
      mapFit: 9.7,
      versatility: 9.0,
      stage: { early: 9.8, mid: 9.1, late: 8.5 },
      tags: ["1st-pick", "flex"],
    },

    Colette: {
      mapFit: 9.6,
      versatility: 8.9,
      counters: {
        Bull: 9,
        Draco: 8,
        Bibi: 8,
      },
      stage: { early: 9.5, mid: 9.2, late: 8.8 },
      tags: ["1st-pick", "defender"],
    },

    Mico: {
      mapFit: 9.4,
      versatility: 8.5,
      stage: { early: 8.2, mid: 8.8, late: 9.7 },
      tags: ["1st-pick", "safe-damage"],
    },

    Edgar: {
      mapFit: 9.3,
      versatility: 8.4,
      stage: { early: 7.8, mid: 8.7, late: 9.8 },
      tags: ["1st-pick", "safe-damage"],
    },

    Nita: {
      mapFit: 9.2,
      versatility: 8.8,
      stage: { early: 9.0, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "control"],
    },

    Griff: {
      mapFit: 9.1,
      versatility: 8.8,
      synergy: {
        Najia: 8,
        Pierce: 8,
      },
      stage: { early: 8.9, mid: 9.0, late: 8.8 },
      tags: ["1st-pick", "flex"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Alli: {
      mapFit: 8.9,
      stage: { early: 6.5, mid: 8.2, late: 9.4 },
      tags: ["last-pick", "safe-damage"],
    },

    Lily: {
      mapFit: 8.8,
      stage: { early: 6.5, mid: 8.1, late: 9.4 },
      tags: ["last-pick", "safe-damage"],
    },

    Darryl: {
      mapFit: 8.7,
      stage: { early: 6.8, mid: 8.0, late: 9.4 },
      tags: ["last-pick", "safe-damage"],
    },

    Carl: {
      mapFit: 8.7,
      stage: { early: 7.6, mid: 8.3, late: 9.0 },
      tags: ["last-pick", "safe-damage"],
    },

    // =========================
    // DEFENDERS
    // =========================
    Otis: {
      mapFit: 9.0,
      synergy: {
        Chuck: 8,
      },
      tags: ["defender"],
    },

    Charlie: {
      mapFit: 8.8,
      tags: ["defender"],
    },

    Clancy: {
      mapFit: 8.7,
      tags: ["defender"],
    },

    Finx: {
      mapFit: 8.6,
      tags: ["defender"],
    },

    Angelo: {
      mapFit: 8.7,
      tags: ["defender", "range"],
    },

    R_T: {
      mapFit: 8.7,
      tags: ["defender", "range"],
    },

    Spike: {
      mapFit: 8.6,
      tags: ["defender"],
    },

    Maisie: {
      mapFit: 8.5,
      tags: ["defender"],
    },

    Cordelius: {
      mapFit: 8.5,
      tags: ["defender"],
    },

    Chester: {
      mapFit: 8.6,
      tags: ["defender"],
    },

    Eve: {
      mapFit: 8.4,
      tags: ["defender"],
    },

    // =========================
    // FLEX
    // =========================
    Crow: {
      mapFit: 8.9,
      versatility: 8.8,
      tags: ["flex"],
    },

    Penny: {
      mapFit: 8.8,
      versatility: 8.6,
      tags: ["flex"],
    },

    Belle: {
      mapFit: 8.7,
      versatility: 8.8,
      tags: ["flex", "range"],
    },

    Byron: {
      mapFit: 8.7,
      versatility: 8.8,
      synergy: {
        Kaze: 8,
        Melodie: 8,
      },
      tags: ["flex", "support"],
    },

    Amber: {
      mapFit: 8.6,
      versatility: 8.7,
      tags: ["flex"],
    },

    Lola: {
      mapFit: 8.5,
      versatility: 8.6,
      tags: ["flex"],
    },

    "8-Bit": {
      mapFit: 8.6,
      versatility: 8.6,
      tags: ["flex"],
    },

    Sirius: {
      mapFit: 8.8,
      versatility: 8.7,
      tags: ["flex"],
    },

    Lumi: {
      mapFit: 8.5,
      versatility: 8.5,
      tags: ["flex"],
    },

    Najia: {
      mapFit: 8.8,
      versatility: 8.8,
      synergy: {
        Griff: 8,
      },
      tags: ["flex"],
    },

    // =========================
    // SAFE DAMAGE
    // =========================
    Kaze: {
      mapFit: 9.0,
      tags: ["safe-damage"],
    },

    Melodie: {
      mapFit: 9.1,
      synergy: {
        Byron: 8,
      },
      tags: ["safe-damage"],
    },

    Chuck: {
      mapFit: 9.3,
      synergy: {
        Otis: 8,
      },
      tags: ["safe-damage"],
    },

    Bibi: {
      mapFit: 8.8,
      tags: ["safe-damage"],
    },

    Draco: {
      mapFit: 8.8,
      tags: ["safe-damage"],
    },

    Bull: {
      mapFit: 8.8,
      tags: ["safe-damage"],
    },

    Bonnie: {
      mapFit: 8.6,
      tags: ["safe-damage"],
    },

    Brock: {
      mapFit: 8.6,
      tags: ["safe-damage"],
    },
  },

  notes:
    "Pit Stop rewards fast safe pressure backed by solid defense. Prioritize one safe-damage threat, one defender, and one flexible ranged pick while saving assassins for favorable last-pick matchups.",
})