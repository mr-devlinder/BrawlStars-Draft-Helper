import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Double Swoosh",
  mode: "Gem Grab",
  weights: {
    mapFit: 1.3,
    versatility: 1.0,
    synergy: 1.05,
    counter: 1.2,
    stage: 0.8,
  },

  composition: [
    { tag: "tank-counter", count: 1, weight: 1.3 },
    { tag: "agro", count: 1, weight: 1.2 },
    { tag: "gem-carrier", count: 1, weight: 1.3 },
  ],

  brawlers: {
    // =========================
    // 1st PICKS
    // =========================
    Damian: {
      mapFit: 9.6,
      versatility: 9.0,
      stage: { early: 9.7, mid: 8.9, late: 8.1 },
      tags: ["1st-pick", "agro"],
    },
    Colette: {
      mapFit: 9.5,
      versatility: 8.8,
      counters: {
        Bull: 9,
        Draco: 8,
        Trunk: 8,
      },
      stage: { early: 9.4, mid: 9.0, late: 8.7 },
      tags: ["1st-pick", "tank-counter"],
    },
    Sirius: {
      mapFit: 9.4,
      versatility: 8.9,
      counters: {
        Bull: 8,
        Draco: 8,
      },
      stage: { early: 9.4, mid: 8.8, late: 8.4 },
      tags: ["1st-pick", "tank-counter"],
    },
    Crow: {
      mapFit: 9.3,
      versatility: 8.9,
      stage: { early: 9.2, mid: 8.9, late: 8.6 },
      tags: ["1st-pick", "gem-carrier"],
    },
    Chester: {
      mapFit: 9.2,
      versatility: 8.8,
      synergy: {
        Meeple: 8,
      },
      counters: {
        Bull: 8,
        Draco: 8,
      },
      stage: { early: 9.1, mid: 8.8, late: 8.8 },
      tags: ["1st-pick", "tank-counter"],
    },
    Otis: {
      mapFit: 9.1,
      versatility: 8.7,
      synergy: {
        Meeple: 8,
      },
      counters: {
        Bull: 9,
        Draco: 8,
      },
      stage: { early: 8.9, mid: 8.9, late: 9.0 },
      tags: ["1st-pick", "tank-counter"],
    },

    // =========================
    // LAST PICKS
    // =========================
    Mortis: {
      mapFit: 8.8,
      stage: { early: 5.8, mid: 7.8, late: 9.4 },
      tags: ["last-pick", "agro"],
    },
    Edgar: {
      mapFit: 8.7,
      stage: { early: 5.8, mid: 7.7, late: 9.3 },
      tags: ["last-pick", "agro"],
    },
    Bull: {
      mapFit: 7.2,
      counters: {
        Colette: 1,
        Otis: 1,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["last-pick", "agro"],
    },
    Alli: {
      mapFit: 8.6,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro"],
    },
    Lily: {
      mapFit: 8.5,
      stage: { early: 6.3, mid: 7.9, late: 9.1 },
      tags: ["last-pick", "agro"],
    },
    Squeak: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.3, mid: 8.6, late: 8.8 },
      tags: ["last-pick", "gem-carrier"],
    },

    // =========================
    // TANK COUNTERS
    // =========================
    Lumi: {
      mapFit: 8.5,
      counters: {
        Bull: 7,
        Draco: 7,
      },
      stage: { early: 7.5, mid: 8.4, late: 8.8 },
      tags: ["tank-counter"],
    },
    Griff: {
      mapFit: 8.6,
      counters: {
        Bull: 8,
        Draco: 8,
      },
      stage: { early: 7.8, mid: 8.6, late: 8.8 },
      tags: ["tank-counter"],
    },
    Clancy: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Draco: 7,
      },
      stage: { early: 7.6, mid: 8.5, late: 8.8 },
      tags: ["tank-counter"],
    },
    Emz: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Draco: 8,
      },
      stage: { early: 7.6, mid: 8.5, late: 8.9 },
      tags: ["tank-counter"],
    },
    Tara: {
      mapFit: 8.5,
      counters: {
        Bull: 8,
        Draco: 8,
      },
      stage: { early: 7.8, mid: 8.5, late: 8.8 },
      tags: ["tank-counter", "gem-carrier"],
    },
    Nita: {
      mapFit: 8.3,
      counters: {
        Bull: 7,
        Draco: 7,
      },
      stage: { early: 7.2, mid: 8.1, late: 8.7 },
      tags: ["tank-counter"],
    },

    // =========================
    // GEM CARRIER / FLEX
    // =========================
    Meeple: {
      mapFit: 8.8,
      versatility: 8.7,
      synergy: {
        Chester: 8,
        Otis: 8,
      },
      stage: { early: 8.7, mid: 8.7, late: 8.4 },
      tags: ["gem-carrier"],
    },
    Charlie: {
      mapFit: 8.7,
      versatility: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["gem-carrier"],
    },
    Najia: {
      mapFit: 8.8,
      versatility: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.5 },
      tags: ["gem-carrier"],
    },
    Pierce: {
      mapFit: 8.8,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.5 },
      tags: ["gem-carrier"],
    },
    Janet: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.5, mid: 8.5, late: 8.4 },
      tags: ["gem-carrier"],
    },
    Sandy: {
      mapFit: 8.7,
      versatility: 8.8,
      stage: { early: 8.8, mid: 8.8, late: 8.6 },
      tags: ["gem-carrier"],
    },
    Stu: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.5, mid: 8.4, late: 8.3 },
      tags: ["agro"],
    },
    Bo: {
      mapFit: 8.4,
      versatility: 8.5,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["gem-carrier"],
    },
    Pam: {
      mapFit: 8.5,
      versatility: 8.6,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["gem-carrier"],
    },
    Lola: {
      mapFit: 8.3,
      versatility: 8.4,
      stage: { early: 8.2, mid: 8.3, late: 8.4 },
      tags: ["gem-carrier"],
    },
    Gene: {
      mapFit: 8.9,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.9, late: 8.7 },
      tags: ["gem-carrier"],
    },

    // =========================
    // AGRO
    // =========================
    Leon: {
      mapFit: 8.8,
      stage: { early: 8.9, mid: 8.7, late: 8.5 },
      tags: ["agro"],
    },
    Mina: {
      mapFit: 8.3,
      stage: { early: 6.8, mid: 8.0, late: 8.8 },
      tags: ["agro"],
    },
    Bibi: {
      mapFit: 8.6,
      stage: { early: 6.7, mid: 8.1, late: 9.2 },
      tags: ["agro"],
    },
    Kenji: {
      mapFit: 8.7,
      stage: { early: 6.9, mid: 8.2, late: 9.1 },
      tags: ["agro"],
    },
    Draco: {
      mapFit: 8.5,
      stage: { early: 6.8, mid: 8.2, late: 8.9 },
      tags: ["agro", "tank"],
    },
    Trunk: {
      mapFit: 8.4,
      stage: { early: 6.8, mid: 8.0, late: 8.9 },
      tags: ["agro", "tank"],
    },

    // =========================
    // OTHER PICKS
    // =========================
    Moe: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.2, late: 8.3 },
      tags: ["agro"],
    },
    Buster: {
      mapFit: 8.3,
      versatility: 8.4,
      stage: { early: 8.2, mid: 8.3, late: 8.5 },
      tags: ["agro"],
    },
    Kit: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.2, late: 8.4 },
      tags: ["agro"],
    },
    Finx: {
      mapFit: 8.1,
      versatility: 8.2,
      stage: { early: 8.0, mid: 8.1, late: 8.2 },
      tags: ["agro"],
    },
    Penny: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.2, late: 8.4 },
      tags: ["agro"],
    },
    Spike: {
      mapFit: 8.3,
      versatility: 8.5,
      stage: { early: 8.3, mid: 8.4, late: 8.5 },
      tags: ["agro"],
    },
  },

  notes:
    "Double Swoosh revolves around maintaining gem control while denying aggressive tanks. Prioritize one dedicated tank counter, one aggressive/control brawler, and one reliable gem carrier. Gray pairs exceptionally well with Tara or Emz for pull combos, while Meeple greatly enhances Chester and Otis as the team's anchor."
})