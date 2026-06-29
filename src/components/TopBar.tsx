import type { GameMap } from "../data/maps"

type Props = {
  mapSearch: string
  setMapSearch: (value: string) => void
  brawlerSearch: string
  setBrawlerSearch: (value: string) => void
  selectedMap: GameMap | null
  startingTeam: "blue" | "red"
  setStartingTeam: (team: "blue" | "red") => void
  onUndo: () => void
  onReset: () => void
  canUndo: boolean
}

export default function TopBar({
  mapSearch,
  setMapSearch,
  brawlerSearch,
  setBrawlerSearch,
  startingTeam,
  setStartingTeam,
  onUndo,
  onReset,
  canUndo,
}: Props) {
  return (
    <header className="top-bar">
      <div className="brand">
        <div className="brand-mark">
          <img src="favicon.svg" alt="Brawl Stars Draft Logo" />
        </div>
        <div>
          <h1>Brawl Draft</h1>
          <span>Draft Helper</span>
        </div>
      </div>

      <div className="searches">
        <label>
          <span>Map</span>
          <input
            placeholder="Search maps"
            value={mapSearch}
            onChange={(event) => setMapSearch(event.target.value)}
          />
        </label>

        <label>
          <span>Brawler</span>
          <input
            placeholder="Search brawlers"
            value={brawlerSearch}
            onChange={(event) => setBrawlerSearch(event.target.value)}
          />
        </label>
      </div>

      <div className="actions">
        <button
          className={"team-toggle " + startingTeam}
          onClick={() => setStartingTeam(startingTeam === "blue" ? "red" : "blue")}
          type="button"
        >
          {startingTeam === "blue" ? "Blue Starts" : "Red Starts"}
        </button>
        <button onClick={onUndo} disabled={!canUndo} type="button">
          Undo
        </button>
        <button onClick={onReset} type="button">
          Reset
        </button>
      </div>
    </header>
  )
}
