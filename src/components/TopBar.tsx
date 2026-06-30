import type { KeyboardEvent } from "react"
import type { Brawler } from "../data/brawlers"
import type { GameMap } from "../data/maps"

type Props = {
  mapSearch: string
  setMapSearch: (value: string) => void
  filteredMaps: GameMap[]
  onSelectMap: (map: GameMap) => void
  brawlerSearch: string
  setBrawlerSearch: (value: string) => void
  filteredBrawlers: Brawler[]
  onSelectBrawler: (brawler: Brawler) => void
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
  filteredMaps,
  onSelectMap,
  brawlerSearch,
  setBrawlerSearch,
  filteredBrawlers,
  onSelectBrawler,
  selectedMap,
  startingTeam,
  setStartingTeam,
  onUndo,
  onReset,
  canUndo,
}: Props) {
  function handleMapKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return

    const firstMap = filteredMaps[0]
    if (!firstMap) return

    event.preventDefault()
    onSelectMap(firstMap)
  }

  function handleBrawlerKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return

    const firstBrawler = filteredBrawlers[0]
    if (!firstBrawler) return

    event.preventDefault()
    onSelectBrawler(firstBrawler)
  }

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
        <div className="search-field">
          <label>
            <span>Map</span>
            <input
              placeholder="Search maps"
              value={mapSearch}
              onChange={(event) => setMapSearch(event.target.value)}
              onKeyDown={handleMapKeyDown}
            />
          </label>

          {mapSearch.trim() ? (
            <div className="search-dropdown" role="listbox" aria-label="Map suggestions">
              {filteredMaps.length ? (
                filteredMaps.slice(0, 6).map((map) => (
                  <button
                    className={"search-result" + (selectedMap?.name === map.name ? " selected" : "")}
                    key={map.name}
                    onClick={() => onSelectMap(map)}
                    type="button"
                  >
                    <img src={map.image} alt="" />
                    <div>
                      <strong>{map.name}</strong>
                      <span>{map.mode}</span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="search-empty">No maps found</div>
              )}
            </div>
          ) : null}
        </div>

        <div className="search-field">
          <label>
            <span>Brawler</span>
            <input
              placeholder="Search brawlers"
              value={brawlerSearch}
              onChange={(event) => setBrawlerSearch(event.target.value)}
              onKeyDown={handleBrawlerKeyDown}
            />
          </label>

          {brawlerSearch.trim() ? (
            <div className="search-dropdown" role="listbox" aria-label="Brawler suggestions">
              {filteredBrawlers.length ? (
                filteredBrawlers.slice(0, 6).map((brawler) => (
                  <button className="search-result" key={brawler.name} onClick={() => onSelectBrawler(brawler)} type="button">
                    <img src={brawler.image} alt="" />
                    <div>
                      <strong>{brawler.name}</strong>
                      <span>{brawler.rarity}</span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="search-empty">No brawlers found</div>
              )}
            </div>
          ) : null}
        </div>
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
