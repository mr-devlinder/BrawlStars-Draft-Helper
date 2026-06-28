import type { Brawler } from "../data/brawlers"

type Props = {
  brawler: Brawler
  onClick?: () => void
  disabled?: boolean
  compact?: boolean
}

export default function BrawlerCard({
  brawler,
  onClick,
  disabled = false,
  compact = false,
}: Props) {
  return (
    <button
      className={`brawler-card rarity rarity-${brawler.rarity}${compact ? " compact" : ""}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <div className="brawler-portrait">
        <img src={brawler.image} alt={brawler.name} />
      </div>
      <span>{brawler.name}</span>
    </button>
  )
}
