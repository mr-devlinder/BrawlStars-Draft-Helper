import type { Brawler } from "../data/brawlers"

type Props = {
  brawler: Brawler | null
  label?: string
}

export default function BanSlot({ brawler, label = "Ban" }: Props) {
  return (
    <div className="ban-slot">
      {brawler ? (
        <div className="ban-wrapper">
          <img src={brawler.image} alt={brawler.name} />
          <div className="ban-cross" />
          <span>{brawler.name}</span>
        </div>
      ) : (
        <span className="empty-slot">{label}</span>
      )}
    </div>
  )
}
