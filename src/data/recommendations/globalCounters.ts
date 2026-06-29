export type GlobalCounterMatrix = Partial<Record<string, Partial<Record<string, number>>>>

export const globalCounterMatrix: GlobalCounterMatrix = {
  Colette: {
    Bibi: 8.8,
    Bull: 9.5,
    Jacky: 9.2,
    Frank: 9.4,
    Rosa: 8.7,
    "El Primo": 8.9,
    Darryl: 8.3,
    Meg: 7.3,
    Draco: 7.8,
    Kenji: 7.4,
  },
  Emz: {
    Bull: 8.6,
    Frank: 8.4,
    Bibi: 7.4,
    Mortis: 7.2,
    Edgar: 6.8,
    Jacky: 7.9,
  },
  Shelly: {
    Bull: 9.5,
    Frank: 9.0,
    "El Primo": 8.6,
    Darryl: 8.0,
    Rosa: 8.2,
    Mortis: 6.6,
    Edgar: 7.3,
  },
  Otis: {
    Bull: 8.7,
    Frank: 8.5,
    Shelly: 7.5,
    Nita: 7.1,
    Bibi: 6.8,
    Edgar: 7.0,
  },
  Griff: {
    Bull: 8.2,
    Frank: 7.8,
    Rosa: 7.0,
    Jacky: 7.4,
  },
  Clancy: {
    Bull: 7.5,
    Frank: 7.4,
    Rosa: 6.8,
    Jacky: 7.0,
  },
  Lumi: {
    Bull: 7.4,
    Frank: 7.3,
    Rosa: 6.7,
    Jacky: 6.9,
  },
  Nita: {
    Bull: 7.3,
    Shelly: 7.2,
    Frank: 6.9,
  },
  Crow: {
    Bibi: 7.1,
    Bull: 7.0,
    Frank: 6.8,
    Shelly: 6.5,
  },
  Leon: {
    Bull: 7.2,
    Frank: 6.9,
    Bibi: 6.6,
  },
  Mortis: {
    Emz: 7.8,
    Shelly: 6.0,
    Frank: 5.8,
    Bull: 5.6,
  },
  Bibi: {
    Emz: 7.0,
    Nita: 6.8,
    Piper: 6.5,
  },
  Bull: {
    Piper: 6.8,
    Brock: 6.6,
    Bea: 6.4,
  },
  Edgar: {
    Piper: 6.8,
    Bea: 6.5,
    Brock: 6.3,
  },
}

export function getGlobalCounterScore(candidateName: string, enemyNames: string[]) {
  const targets = globalCounterMatrix[candidateName]
  if (!targets) return 0

  const matches = enemyNames
    .map((enemyName) => targets[enemyName])
    .filter((value): value is number => typeof value === "number")

  if (matches.length === 0) return 0

  return matches.reduce((sum, value) => sum + value, 0) / matches.length
}
