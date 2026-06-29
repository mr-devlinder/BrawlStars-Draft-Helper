import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Hot Potato",
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
      counters: {
        Bull: 9,
        Darryl: 9,
        Chuck: 8,
      },
      stage: { early: 9.5, mid: 9.2, late: 9.0 },
      tags: ["1st-pick", "defender"],
    },
    Colt: {
      mapFit: 9.4,
      versatility: 8.8,
      counters: {
        HeistSafe: 9,
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 9.2, mid: 9.0, late: 8.9 },
      tags: ["1st-pick", "safe-damage"],
    },
    Crow: {
      mapFit: 9.1,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.6 },
      tags: ["1st-pick", "flex"],
    },
    Griff: {
      mapFit: 9.0,
      versatility: 8.7,
      synergy: {
        Pierce: 8,
        Najia: 8,
      },
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.9, mid: 9.0, late: 8.9 },
      tags: ["1st-pick", "safe-damage"],
    },
    Sirius: {
      mapFit: 9.0,
      versatility: 8.8,
      stage: { early: 9.0, mid: 8.9, late: 8.7 },
      tags: ["1st-pick", "flex"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Berry: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["last-pick", "support", "safe-damage"],
    },
    Edgar: {
      mapFit: 8.8,
      stage: { early: 5.8, mid: 7.7, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Shade: {
      mapFit: 8.6,
      stage: { early: 6.3, mid: 7.9, late: 9.2 },
      tags: ["last-pick", "pressure"],
    },
    Kit: {
      mapFit: 8.7,
      synergy: {
        Otis: 8,
      },
      stage: { early: 6.8, mid: 8.2, late: 9.0 },
      tags: ["last-pick", "support"],
    },
    Lily: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 8.0, late: 9.3 },
      tags: ["last-pick", "agro"],
    },

    // =========================
    // DEFENDERS
    // =========================
    Otis: {
      mapFit: 9.0,
      versatility: 8.8,
      synergy: {
        Kit: 8,
      },
      counters: {
        Bull: 9,
        Darryl: 9,
      },
      stage: { early: 8.9, mid: 9.0, late: 9.1 },
      tags: ["defender"],
    },
    Charlie: {
      mapFit: 8.8,
      versatility: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["defender"],
    },
    Clancy: {
      mapFit: 8.6,
      counters: {
        Bull: 8,
        Darryl: 7,
      },
      stage: { early: 8.5, mid: 8.6, late: 8.8 },
      tags: ["defender"],
    },
    Chester: {
      mapFit: 8.9,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.8, mid: 8.9, late: 9.0 },
      tags: ["defender"],
    },
    Emz: {
      mapFit: 8.6,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["defender"],
    },
    R_T: {
      mapFit: 8.9,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["defender"],
    },
    Spike: {
      mapFit: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Maisie: {
      mapFit: 8.6,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["defender"],
    },
    Cordelius: {
      mapFit: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Tara: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["defender", "control"],
    },
    KitDefender: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["defender"],
    },

    // =========================
    // FLEX
    // =========================
    Lumi: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    Pierce: {
      mapFit: 8.8,
      synergy: {
        Griff: 8,
      },
      stage: { early: 8.9, mid: 8.8, late: 8.7 },
      tags: ["flex", "synergy"],
    },
    Amber: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },
    Nita: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["flex"],
    },
    Ruffs: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex", "support"],
    },
    Buzz: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["flex"],
    },
    Rico: {
      mapFit: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex"],
    },
    Lola: {
      mapFit: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    Penny: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["flex"],
    },
    Najia: {
      mapFit: 8.6,
      synergy: {
        Griff: 8,
      },
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
      stage: { early: 8.7, mid: 8.8, late: 9.0 },
      tags: ["safe-damage"],
    },
    Bull: {
      mapFit: 7.2,
      counters: {
        Colette: 1,
        Otis: 1,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["safe-damage", "tank"],
    },
    Draco: {
      mapFit: 8.6,
      stage: { early: 6.8, mid: 8.2, late: 9.0 },
      tags: ["safe-damage"],
    },
    Carl: {
      mapFit: 8.5,
      stage: { early: 6.7, mid: 8.1, late: 8.9 },
      tags: ["safe-damage"],
    },
    Mico: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 7.9, late: 9.3 },
      tags: ["safe-damage"],
    },
  },

  notes:
    "Hot Potato is a fast Heist map where early pressure and safe damage burst determine tempo. Prioritize one safe damage/aggressive pick, one defender anchor, and one flexible support. Griff + Pierce or Najia remains a strong scaling synergy for consistent Heist damage output.",
})