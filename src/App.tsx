import { useEffect, useMemo, useState } from "react"
import { maps, type GameMap } from "./data/maps"
import { brawlers, type Brawler } from "./data/brawlers"
import { getDraftRecommendations } from "./data/recommendations/engine"
import type { DraftState } from "./data/recommendations/types"
import BrawlerCard from "./components/BrawlerCard"
import DraftBoard from "./components/DraftBoard"
import TopBar from "./components/TopBar"

import "./App.css"

type Team = "blue" | "red"
type Phase = "bans" | "picks" | "complete"
type DraftAction = {
  phase: Exclude<Phase, "complete">
  team: Team
  brawler: Brawler
}

type DraftStep = {
  team: Team
  count: number
}

const draftTemplate: DraftStep[] = [
  { team: "blue", count: 1 },
  { team: "red", count: 2 },
  { team: "blue", count: 2 },
  { team: "red", count: 1 },
]

function getDraftOrder(startingTeam: Team): Team[] {
  const order: Team[] = []

  draftTemplate.forEach((step) => {
    const team = startingTeam === "blue" ? step.team : step.team === "blue" ? "red" : "blue"

    for (let i = 0; i < step.count; i += 1) {
      order.push(team)
    }
  })

  return order
}

function getBanTeam(actionCount: number): Team {
  return actionCount % 2 === 0 ? "blue" : "red"
}

function App() {
  const [selectedMap, setSelectedMap] = useState<GameMap | null>(null)
  const [isMapPreviewOpen, setIsMapPreviewOpen] = useState(false)
  const [mapSearch, setMapSearch] = useState("")
  const [brawlerSearch, setBrawlerSearch] = useState("")
  const [startingTeam, setStartingTeam] = useState<Team>("blue")
  const [actions, setActions] = useState<DraftAction[]>([])

  const draftOrder = useMemo(() => getDraftOrder(startingTeam), [startingTeam])
  const banActions = actions.filter((action) => action.phase === "bans")
  const pickActions = actions.filter((action) => action.phase === "picks")
  const blueBans = banActions.filter((action) => action.team === "blue").map((action) => action.brawler)
  const redBans = banActions.filter((action) => action.team === "red").map((action) => action.brawler)
  const blueTeam = pickActions.filter((action) => action.team === "blue").map((action) => action.brawler)
  const redTeam = pickActions.filter((action) => action.team === "red").map((action) => action.brawler)
  const phase: Phase = banActions.length < 6 ? "bans" : pickActions.length < 6 ? "picks" : "complete"
  const currentTeam: Team | null = phase === "bans" ? getBanTeam(banActions.length) : phase === "picks" ? draftOrder[pickActions.length] : null

  const filteredMaps = Object.values(maps).filter((map) =>
    (map.name + " " + map.mode).toLowerCase().includes(mapSearch.toLowerCase()),
  )

  const filteredBrawlers = brawlers.filter((brawler) =>
    brawler.name.toLowerCase().includes(brawlerSearch.toLowerCase()),
  )

  const usedNames = new Set(actions.map((action) => action.brawler.name))

  function resetDraft(nextStartingTeam = startingTeam) {
    setStartingTeam(nextStartingTeam)
    setSelectedMap(null)
    setActions([])
    setMapSearch("")
    setBrawlerSearch("")
    setIsMapPreviewOpen(false)
  }

  function selectMap(map: GameMap) {
    setSelectedMap(map)
    setMapSearch("")
    setIsMapPreviewOpen(false)
  }

  function selectBrawler(brawler: Brawler) {
    if (phase === "complete" || usedNames.has(brawler.name) || !currentTeam) return

    setActions((current) => [
      ...current,
      {
        phase,
        team: currentTeam,
        brawler,
      },
    ])
    setBrawlerSearch("")
  }

  function undoLast() {
    setActions((current) => current.slice(0, -1))
  }

  function handleStartingTeam(team: Team) {
    resetDraft(team)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMapPreviewOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const phaseLabel = phase === "complete" ? "Draft complete" : (currentTeam === "blue" ? "Blue" : "Red") + " " + (phase === "bans" ? "ban" : "pick")
  const stepCount = phase === "bans" ? banActions.length + 1 : pickActions.length + 1
  const totalCount = 6
  const recommendationPhase = phase === "complete" ? "picks" : phase
  const draftState: DraftState = {
    selectedMap,
    phase: recommendationPhase,
    startingTeam,
    turnOrder: draftOrder,
    banIndex: banActions.length,
    pickIndex: pickActions.length,
    blueTeam,
    redTeam,
    blueBans,
    redBans,
  }

  const recommendations = useMemo(
    () => (selectedMap ? getDraftRecommendations(draftState) : []),
    [
      selectedMap,
      draftState.selectedMap,
      draftState.phase,
      draftState.startingTeam,
      draftState.banIndex,
      draftState.pickIndex,
      draftState.turnOrder,
      draftState.blueTeam,
      draftState.redTeam,
      draftState.blueBans,
      draftState.redBans,
    ],
  )
  return (
    <main className="app">
      <TopBar
        mapSearch={mapSearch}
        setMapSearch={setMapSearch}
        filteredMaps={filteredMaps}
        onSelectMap={selectMap}
        brawlerSearch={brawlerSearch}
        setBrawlerSearch={setBrawlerSearch}
        filteredBrawlers={filteredBrawlers}
        onSelectBrawler={selectBrawler}
        selectedMap={selectedMap}
        startingTeam={startingTeam}
        setStartingTeam={handleStartingTeam}
        onUndo={undoLast}
        onReset={() => resetDraft()}
        canUndo={actions.length > 0}
      />

      <section className="draft-status" aria-live="polite">
        <div>
          <span className="eyebrow">Current turn</span>
          <strong className={currentTeam ? "team-text " + currentTeam : "team-text"}>{phaseLabel}</strong>
        </div>
        <div>
          <span className="eyebrow">Progress</span>
          <strong>{phase === "complete" ? "6 / 6 picks" : stepCount + " / " + totalCount}</strong>
        </div>
        <div>
          <span className="eyebrow">Map</span>
          <div className="map-status-row">
            <strong>{selectedMap ? selectedMap.name : "Choose a map"}</strong>
            {selectedMap ? (
              <button
                className="map-preview-button"
                onClick={() => setIsMapPreviewOpen(true)}
                type="button"
                aria-label={`View ${selectedMap.name} map image`}
                title="View map image"
              >
                i
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <DraftBoard
        blueTeam={blueTeam}
        redTeam={redTeam}
        blueBans={blueBans}
        redBans={redBans}
        recommendations={recommendations}
        onSelectRecommendation={selectBrawler}
        currentTeam={currentTeam}
        phase={phase}
        selectedMap={selectedMap}
      />

      <section className="picker-layout">
        <div className="panel map-picker">
          <div className="panel-heading">
            <h2>Maps</h2>
            <span>{filteredMaps.length}</span>
          </div>
          <div className="map-list">
            {filteredMaps.map((map) => (
              <button
                className={"map-option" + (selectedMap?.name === map.name ? " selected" : "")}
                key={map.name}
                onClick={() => selectMap(map)}
                type="button"
              >
                <img src={map.image} alt="" />
                <span>{map.name}</span>
                <small>{map.mode}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="panel brawler-picker">
          <div className="panel-heading">
            <h2>Brawlers</h2>
            <span>{filteredBrawlers.length}</span>
          </div>
          <div className="brawler-grid">
            {filteredBrawlers.map((brawler) => (
              <BrawlerCard
                brawler={brawler}
                disabled={phase === "complete" || usedNames.has(brawler.name)}
                key={brawler.name}
                onClick={() => selectBrawler(brawler)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedMap && isMapPreviewOpen ? (
        <div
          className="map-preview-backdrop"
          onClick={() => setIsMapPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMap.name} map preview`}
        >
          <div className="map-preview-modal" onClick={(event) => event.stopPropagation()}>
            <button
              className="map-preview-close"
              onClick={() => setIsMapPreviewOpen(false)}
              type="button"
              aria-label="Close map preview"
            >
              ×
            </button>
            <img src={selectedMap.image} alt={selectedMap.name} />
            <div className="map-preview-caption">
              <strong>{selectedMap.name}</strong>
              <span>{selectedMap.mode}</span>
            </div>
          </div>
        </div>
      ) : null}

    </main>
  )
}

export default App
