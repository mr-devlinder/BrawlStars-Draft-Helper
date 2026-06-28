import type { Brawler } from "../data/brawlers"

type Props = {
  brawler: Brawler | null
  label?: string
}

export default function BanSlot({ brawler, label = "Ban" }: Props) {
  return (
    <div className="ban-slot">
      {brawler ? (
        <>
          <img src={brawler.image} alt={brawler.name} />
          <span>{brawler.name}</span>
        </>
      ) : (
        <span className="empty-slot">{label}</span>
      )}
    </div>
  )
}
