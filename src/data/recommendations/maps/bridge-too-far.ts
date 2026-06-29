import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Bridge Too Far",
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
    Pierce: {
      mapFit: 9.3,
      versatility: 8.8,
      stage: { early: 9.2, mid: 9.0, late: 8.6 },
      tags: ["1st-pick", "safe-damage"],
    },
    Colt: {
      mapFit: 9.2,
      versatility: 8.7,
      counters: {
        HeistSafe: 9,
        Bull: 8,
      },
      stage: { early: 9.0, mid: 8.9, late: 8.8 },
      tags: ["1st-pick", "safe-damage"],
    },
    Crow: {
      mapFit: 9.0,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.5 },
      tags: ["1st-pick", "flex"],
    },
    Angelo: {
      mapFit: 9.1,
      versatility: 8.8,
      synergy: {
        Byron: 8,
        Chuck: 8,
      },
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 9.1, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "defender"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Edgar: {
      mapFit: 8.7,
      stage: { early: 5.8, mid: 7.6, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Alli: {
      mapFit: 8.6,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Lily: {
      mapFit: 8.6,
      stage: { early: 6.5, mid: 8.0, late: 9.3 },
      tags: ["last-pick", "agro"],
    },
    Darryl: {
      mapFit: 8.8,
      counters: {
        HeistSafe: 8,
        Colette: 2,
      },
      stage: { early: 6.2, mid: 7.8, late: 9.6 },
      tags: ["last-pick", "tank"],
    },
    Mico: {
      mapFit: 8.7,
      stage: { early: 6.3, mid: 7.9, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Carl: {
      mapFit: 8.6,
      stage: { early: 6.8, mid: 8.0, late: 9.1 },
      tags: ["last-pick", "safe-damage"],
    },

    // =========================
    // DEFENDERS
    // =========================
    Otis: {
      mapFit: 9.0,
      versatility: 8.8,
      synergy: {
        Chuck: 8,
      },
      counters: {
        Darryl: 9,
        Bull: 9,
      },
      stage: { early: 8.9, mid: 9.0, late: 9.1 },
      tags: ["defender"],
    },
    Charlie: {
      mapFit: 8.8,
      versatility: 8.7,
      counters: {
        Darryl: 8,
        Bull: 8,
      },
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["defender"],
    },
    Eve: {
      mapFit: 8.7,
      versatility: 8.6,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    R_T: {
      mapFit: 8.9,
      versatility: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.8, mid: 8.9, late: 8.9 },
      tags: ["defender", "range"],
    },
    Spike: {
      mapFit: 8.6,
      versatility: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["defender"],
    },
    Maisie: {
      mapFit: 8.6,
      versatility: 8.6,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["defender"],
    },
    Cordelius: {
      mapFit: 8.7,
      versatility: 8.7,
      counters: {
        Bull: 8,
        Darryl: 8,
      },
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["defender"],
    },
    Clancy: {
      mapFit: 8.5,
      versatility: 8.6,
      counters: {
        Bull: 8,
        Darryl: 7,
      },
      stage: { early: 8.4, mid: 8.5, late: 8.7 },
      tags: ["defender"],
    },

    // =========================
    // FLEX
    // =========================
    Nani: {
      mapFit: 8.8,
      versatility: 8.6,
      stage: { early: 8.7, mid: 8.8, late: 8.8 },
      tags: ["flex", "safe-damage"],
    },
    Belle: {
      mapFit: 8.7,
      versatility: 8.6,
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["flex", "safe-damage"],
    },
    Amber: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["flex", "safe-damage"],
    },
    "8-Bit": {
      mapFit: 8.7,
      versatility: 8.5,
      stage: { early: 8.4, mid: 8.7, late: 8.9 },
      tags: ["flex", "safe-damage"],
    },
    Lola: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["flex"],
    },
    Najia: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.6, mid: 8.6, late: 8.6 },
      tags: ["flex"],
    },
    Sirius: {
      mapFit: 8.6,
      versatility: 8.7,
      stage: { early: 8.7, mid: 8.6, late: 8.5 },
      tags: ["flex"],
    },
    Byron: {
      mapFit: 8.7,
      versatility: 8.7,
      synergy: {
        Kaze: 8,
        Melodie: 8,
      },
      stage: { early: 8.6, mid: 8.7, late: 8.7 },
      tags: ["flex", "support"],
    },

    // =========================
    // SAFE DAMAGE
    // =========================
    Kaze: {
      mapFit: 8.9,
      synergy: {
        Byron: 8,
      },
      stage: { early: 8.8, mid: 8.9, late: 9.0 },
      tags: ["safe-damage"],
    },
    Melodie: {
      mapFit: 8.8,
      synergy: {
        Byron: 8,
      },
      stage: { early: 8.7, mid: 8.8, late: 9.0 },
      tags: ["safe-damage"],
    },
    Chuck: {
      mapFit: 9.0,
      synergy: {
        Otis: 8,
      },
      stage: { early: 8.8, mid: 9.0, late: 9.2 },
      tags: ["safe-damage"],
    },
    Bull: {
      mapFit: 7.2,
      counters: {
        Colette: 1,
        Angelo: 2,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["last-pick", "tank"],
    },
    Bonnie: {
      mapFit: 8.4,
      stage: { early: 8.3, mid: 8.5, late: 8.6 },
      tags: ["safe-damage"],
    },
    Brock: {
      mapFit: 8.7,
      stage: { early: 8.6, mid: 8.7, late: 8.8 },
      tags: ["safe-damage"],
    },
  },

  notes:
    "Bridge Too Far is a split-lane Heist map where defender stability and burst safe damage win games. Prioritize one agro/safe damage pick, one defender/range anchor, and one flexible damage dealer. Byron + Kaze or Melodie is a strong poke-sustain core, while Chuck + Otis provides strong safe zone control and shutdown potential.",
})