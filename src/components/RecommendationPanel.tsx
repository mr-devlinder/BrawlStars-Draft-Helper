import type { RecommendationResult } from "../data/recommendations/types"

type Props = {
  title: string
  subtitle: string
  recommendations: RecommendationResult[]
}

function formatScore(score: number) {
  return score.toFixed(2)
}

export default function RecommendationPanel({ title, subtitle, recommendations }: Props) {
  const topScore = recommendations[0]?.score ?? 1

  return (
    <section className="recommendation-panel panel">
      <div className="panel-heading">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>

      <div className="recommendation-list">
        {recommendations.slice(0, 8).map((result) => (
          <article className="recommendation-row" key={result.brawler.name}>
            <div className="recommendation-main">
              <img src={result.brawler.image} alt={result.brawler.name} />
              <div>
                <strong>{result.brawler.name}</strong>
                <span>{result.reasons.length ? result.reasons.join(" · ") : "baseline value"}</span>
              </div>
            </div>

            <div className="recommendation-score">
              <strong>{formatScore(result.score)}</strong>
              <div className="score-bar">
                <span style={{ width: `${Math.max(8, (result.score / topScore) * 100)}%` }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
