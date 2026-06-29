import { createMapRecommendationProfile } from "../base"

export default createMapRecommendationProfile({
  mapName: "Hard Rock Mine",
  mode: "Gem Grab",
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
      stage: { early: 9.7, mid: 8.9, late: 8.1 },
      tags: ["1st-pick", "flex"],
    },
    Colette: {
      mapFit: 9.5,
      versatility: 8.8,
      counters: {
        Bull: 9,
        Draco: 8,
        Lily: 7,
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
        Ruffs: 8,
        Kit: 8,
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
        Chester: 2,
      },
      stage: { early: 5.8, mid: 7.2, late: 9.6 },
      tags: ["last-pick", "tank"],
    },
    Shade: {
      mapFit: 8.6,
      stage: { early: 6.2, mid: 7.9, late: 9.2 },
      tags: ["last-pick", "pressure"],
    },
    Lily: {
      mapFit: 8.5,
      stage: { early: 6.3, mid: 7.9, late: 9.1 },
      tags: ["last-pick", "agro"],
    },
    Alli: {
      mapFit: 8.6,
      stage: { early: 6.4, mid: 8.0, late: 9.2 },
      tags: ["last-pick", "agro"],
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
      tags: ["tank-counter", "control"],
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
    // GEM CARRIER
    // =========================
    Meeple: {
      mapFit: 8.8,
      versatility: 8.7,
      stage: { early: 8.7, mid: 8.7, late: 8.4 },
      tags: ["gem-carrier", "support"],
    },
    Charlie: {
      mapFit: 8.7,
      versatility: 8.6,
      stage: { early: 8.5, mid: 8.6, late: 8.7 },
      tags: ["gem-carrier", "control"],
    },
    Janet: {
      mapFit: 8.6,
      versatility: 8.6,
      stage: { early: 8.6, mid: 8.6, late: 8.5 },
      tags: ["gem-carrier"],
    },
    Najia: {
      mapFit: 8.8,
      versatility: 8.8,
      stage: { early: 8.9, mid: 8.8, late: 8.5 },
      tags: ["gem-carrier"],
    },
    Glowy: {
      mapFit: 8.4,
      versatility: 8.4,
      stage: { early: 8.3, mid: 8.4, late: 8.3 },
      tags: ["gem-carrier"],
    },
    Pam: {
      mapFit: 8.5,
      versatility: 8.6,
      stage: { early: 8.4, mid: 8.5, late: 8.6 },
      tags: ["gem-carrier", "support"],
    },
    Max: {
      mapFit: 8.6,
      versatility: 8.8,
      stage: { early: 8.6, mid: 8.7, late: 8.6 },
      tags: ["gem-carrier", "support"],
    },
    Gray: {
      mapFit: 8.5,
      versatility: 8.6,
      stage: { early: 8.4, mid: 8.5, late: 8.5 },
      tags: ["gem-carrier", "control"],
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

    // =========================
    // OTHER PICKS
    // =========================
    Rico: {
      mapFit: 8.5,
      versatility: 8.5,
      stage: { early: 8.6, mid: 8.5, late: 8.4 },
      tags: ["safe-pick"],
    },
    Moe: {
      mapFit: 8.2,
      versatility: 8.3,
      stage: { early: 8.1, mid: 8.2, late: 8.3 },
      tags: ["safe-pick"],
    },
    Sandy: {
      mapFit: 8.6,
      versatility: 8.8,
      stage: { early: 8.7, mid: 8.8, late: 8.7 },
      tags: ["safe-pick", "support"],
    },
    Kit: {
      mapFit: 8.2,
      versatility: 8.3,
      synergy: {
        Ruffs: 8,
        Chester: 8,
      },
      stage: { early: 8.1, mid: 8.2, late: 8.4 },
      tags: ["safe-pick", "synergy"],
    },
    Ruffs: {
      mapFit: 8.4,
      versatility: 8.6,
      synergy: {
        Kit: 8,
        Chester: 8,
      },
      stage: { early: 8.5, mid: 8.5, late: 8.4 },
      tags: ["safe-pick", "support", "synergy"],
    },
    Pierce: {
      mapFit: 8.8,
      versatility: 8.9,
      stage: { early: 9.0, mid: 8.8, late: 8.5 },
      tags: ["safe-pick"],
    },
    Lola: {
      mapFit: 8.3,
      versatility: 8.4,
      stage: { early: 8.2, mid: 8.3, late: 8.4 },
      tags: ["safe-pick"],
    },
  },

  notes:
    "Hard Rock Mine rewards strong mid control and sustained lane pressure. Prioritize one dedicated tank counter, one aggressive/control pick, and one reliable gem carrier. Ruffs pairs exceptionally well with either Kit or Chester, creating one of the strongest synergy cores on the map."
})