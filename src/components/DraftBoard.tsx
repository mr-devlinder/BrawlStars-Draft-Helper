import type { Brawler } from "../data/brawlers"
import type { GameMap } from "../data/maps"

import BanSlot from "./BanSlot"
import BrawlerCard from "./BrawlerCard"

type Props = {
  blueTeam: Brawler[]
  redTeam: Brawler[]
  blueBans: Brawler[]
  redBans: Brawler[]
  selectedMap: GameMap | null
  currentTeam: "blue" | "red" | null
  phase: "bans" | "picks" | "complete"
}

function PickSlot({ brawler, label }: { brawler: Brawler | null; label: string }) {
  return (
    <div className="slot">
      {brawler ? <BrawlerCard brawler={brawler} compact /> : <span className="empty-slot">{label}</span>}
    </div>
  )
}

export default function DraftBoard({
  blueTeam,
  redTeam,
  blueBans,
  redBans,
  selectedMap,
  currentTeam,
  phase,
}: Props) {
  return (
    <section className="draft-board">
      <div className={"team-column blue" + (currentTeam === "blue" ? " active" : "")}>
        <div className="team-heading">
          <h2>Blue</h2>
          <span>{phase === "bans" ? blueBans.length + "/3 bans" : blueTeam.length + "/3 picks"}</span>
        </div>
        <div className="slot-row bans">
          {Array.from({ length: 3 }).map((_, index) => (
            <BanSlot key={index} brawler={blueBans[index] ?? null} label={"B" + (index + 1)} />
          ))}
        </div>
        <div className="slot-row picks">
          {Array.from({ length: 3 }).map((_, index) => (
            <PickSlot key={index} brawler={blueTeam[index] ?? null} label={"P" + (index + 1)} />
          ))}
        </div>
      </div>

      <div className="map-card">
        {selectedMap ? (
          <>
            <img src={selectedMap.image} alt={selectedMap.name} />
            <strong>{selectedMap.name}</strong>
            <span>{selectedMap.mode}</span>
          </>
        ) : (
          <strong>No map selected</strong>
        )}
      </div>

      <div className={"team-column red" + (currentTeam === "red" ? " active" : "")}>
        <div className="team-heading">
          <h2>Red</h2>
          <span>{phase === "bans" ? redBans.length + "/3 bans" : redTeam.length + "/3 picks"}</span>
        </div>
        <div className="slot-row bans">
          {Array.from({ length: 3 }).map((_, index) => (
            <BanSlot key={index} brawler={redBans[index] ?? null} label={"B" + (index + 1)} />
          ))}
        </div>
        <div className="slot-row picks">
          {Array.from({ length: 3 }).map((_, index) => (
            <PickSlot key={index} brawler={redTeam[index] ?? null} label={"P" + (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  )
}
