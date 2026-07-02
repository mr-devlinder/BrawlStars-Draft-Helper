import type { Brawler } from "../data/brawlers"

type Props = {
  brawler: Brawler
  onClick?: () => void
  disabled?: boolean
  muted?: boolean
  compact?: boolean
}

export default function BrawlerCard({
  brawler,
  onClick,
  disabled = false,
  muted = false,
  compact = false,
}: Props) {
  const rarityClass = brawler.rarity.replace(/\s+/g, "")

  return (
    <button
      className={`brawler-card rarity rarity-${rarityClass}${compact ? " compact" : ""}${muted ? " muted" : ""}`}
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
