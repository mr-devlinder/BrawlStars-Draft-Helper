import type { Brawler } from "../data/brawlers"
import type { RecommendationResult } from "../data/recommendations/types"

import BanSlot from "./BanSlot"
import BrawlerCard from "./BrawlerCard"

type Props = {
  blueTeam: Brawler[]
  redTeam: Brawler[]
  blueBans: Brawler[]
  redBans: Brawler[]
  recommendations: RecommendationResult[]
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
  recommendations,
  currentTeam,
  phase,
}: Props) {
  const topScore = recommendations[0]?.score ?? 1

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

      <div className="recommendation-card">
        <div className="team-heading">
          <h2>{phase === "bans" ? "Ban priorities" : "Pick recommendations"}</h2>
          <span>{currentTeam ? `${currentTeam === "blue" ? "Blue" : "Red"} turn` : "No active turn"}</span>
        </div>

        <div className="recommendation-list compact">
          {recommendations.slice(0, 5).map((result) => (
            <article className="recommendation-row compact" key={result.brawler.name}>
              <div className="recommendation-main">
                <img src={result.brawler.image} alt={result.brawler.name} />
                <div>
                  <strong>{result.brawler.name}</strong>
                  <span>{result.reasons.length ? result.reasons.join(" · ") : "baseline value"}</span>
                </div>
              </div>

              <div className="recommendation-score">
                <strong>{result.score.toFixed(2)}</strong>
                <div className="score-bar">
                  <span style={{ width: `${Math.max(8, (result.score / topScore) * 100)}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
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
