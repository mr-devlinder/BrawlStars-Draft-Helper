import type { Brawler } from "../data/brawlers"

type Props = {
    brawler: Brawler
    onClick?: () => void
}

export default function BrawlerCard({ brawler, onClick }: Props) {
    return (
        <div className="brawler-card" onClick={onClick}>
            <div className={'rarity rarity-${brawler.rarity}'}>
                <img src={brawler.image} alt={brawler.name} />
            </div>

            <p>{brawler.name}</p>
        </div>
    )
}

