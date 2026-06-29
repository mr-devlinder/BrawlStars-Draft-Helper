import { asset } from "../utils/assets"

export type GameMap = {
  name: string
  mode: string
  image: string
}

export const maps: Record<string, GameMap> = {
  "Dry Season": {
    name: "Dry Season",
    mode: "Bounty",
    image: asset("/maps/dryseason.png")
  },
  "Hideout": {
    name: "Hideout",
    mode: "Bounty",
    image: asset("/maps/hideout.png")
  },
  "Layer Cake": {
    name: "Layer Cake",
    mode: "Bounty",
    image: asset("/maps/layercake.png")
  },
  "Shooting Star": {
    name: "Shooting Star",
    mode: "Bounty",
    image: asset("/maps/shootingstar.png")
  },
  "Center Stage": {
    name: "Center Stage",
    mode: "Brawl Ball",
    image: asset("/maps/centerstage.png"),
  },
  "Pinball Dreams": {
    name: "Pinball Dreams",
    mode: "Brawl Ball",
    image: asset("/maps/pinballdreams.png"),
  },
  "Sneaky Fields": {
    name: "Sneaky Fields",
    mode: "Brawl Ball",
    image: asset("/maps/sneakyfields.png"),
  },
  "Triple Dribble": {
    name: "Triple Dribble",
    mode: "Brawl Ball",
    image: asset("/maps/tripledribble.png"),
  },
  "Double Swoosh": {
    name: "Double Swoosh",
    mode: "Gem Grab",
    image: asset("/maps/doubleswoosh.png")
  },
  "Gem Fort": {
    name: "Gem Fort",
    mode: "Gem Grab",
    image: asset("/maps/gemfort.png")
  },
  "Hard Rock Mine": {
    name: "Hard Rock Mine",
    mode: "Gem Grab",
    image: asset("/maps/hardrockmine.png")
  },
  "Undermine": {
    name: "Undermine",
    mode: "Gem Grab",
    image: asset("/maps/undermine.png")
  },
  "Bridge Too Far": {
    name: "Bridge Too Far",
    mode: "Heist",
    image: asset("/maps/bridgetoofar.png")
  },
  "Hot Potato": {
    name: "Hot Potato",
    mode: "Heist",
    image: asset("/maps/hotpotato.png")
  },
  "Kaboom Canyon": {
    name: "Kaboom Canyon",
    mode: "Heist",
    image: asset("/maps/kaboomcanyon.png")
  },
  "Safe Zone": {
    name: "Safe Zone",
    mode: "Heist",
    image: asset("/maps/safezone.png")
  },
  "Pit Stop": {
    name: "Pit Stop",
    mode: "Heist",
    image: asset("/maps/pitstop.png")
  },
  "Dueling Beetles": {
    name: "Dueling Beetles",
    mode: "Hot Zone",
    image: asset("/maps/duelingbeetles.png")
  },
  "In The Liminal": {
    name: "In The Liminal",
    mode: "Hot Zone",
    image: asset("/maps/intheliminal.png")
  },
  "Open Business": {
    name: "Open Business",
    mode: "Hot Zone",
    image: asset("/maps/openbusiness.png")
  },
  "Parallel Plays": {
    name: "Parallel Plays",
    mode: "Hot Zone",
    image: asset("/maps/parallelplays.png")
  },
  "Quick Travel": {
    name: "Quick Travel",
    mode: "Hot Zone",
    image: asset("/maps/quicktravel.png")
  },
  "Ring Of Fire": {
    name: "Ring Of Fire",
    mode: "Hot Zone",
    image: asset("/maps/ringoffire.png")
  },
  "Belles Rock": {
    name: "Belles Rock",
    mode: "Knockout",
    image: asset("/maps/bellesrock.png")
  },
  "Flaring Phoenix": {
    name: "Flaring Phoenix",
    mode: "Knockout",
    image: asset("/maps/flaringphoenix.png")
  },
  "New Horizons": {
    name: "New Horizons",
    mode: "Knockout",
    image: asset("/maps/newhorizons.png")
  },
  "Out In The Open": {
    name: "Out In The Open",
    mode: "Knockout",
    image: asset("/maps/outintheopen.png")
  },
}
