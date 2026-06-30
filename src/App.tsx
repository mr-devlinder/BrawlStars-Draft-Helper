import { useEffect, useMemo, useState, type FormEvent } from "react"
import { maps as defaultMaps, type GameMap } from "./data/maps"
import { brawlers, type Brawler } from "./data/brawlers"
import { getDraftRecommendations } from "./data/recommendations/engine"
import type { DraftState } from "./data/recommendations/types"
import {
  clearAdminSession,
  bootstrapRuntimeData,
  isSupabaseAdminConfigured,
  loadAdminSession,
  loadStoredMaps,
  saveAdminSession,
  saveStoredMaps,
  signInAdmin,
} from "./data/adminStore"
import BrawlerCard from "./components/BrawlerCard"
import AdminDashboard from "./components/AdminDashboard"
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

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "draftboard"

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
  const [runtimeMaps, setRuntimeMaps] = useState<Record<string, GameMap>>(() => loadStoredMaps(defaultMaps))
  const [selectedMapName, setSelectedMapName] = useState<string | null>(null)
  const [isMapPreviewOpen, setIsMapPreviewOpen] = useState(false)
  const [mapSearch, setMapSearch] = useState("")
  const [brawlerSearch, setBrawlerSearch] = useState("")
  const [startingTeam, setStartingTeam] = useState<Team>("blue")
  const [actions, setActions] = useState<DraftAction[]>([])
  const [view, setView] = useState<"draft" | "admin">("draft")
  const [isAdminAuthed, setIsAdminAuthed] = useState(() => Boolean(loadAdminSession()))
  const [showLogin, setShowLogin] = useState(false)
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (!isHydrated) return
    void saveStoredMaps(runtimeMaps)
  }, [runtimeMaps, isHydrated])

  useEffect(() => {
    void bootstrapRuntimeData(defaultMaps).then((data) => {
      setRuntimeMaps(data.maps)
      setSelectedMapName((current) => (current && data.maps[current] ? current : null))
      setIsHydrated(true)
    })
  }, [])

  useEffect(() => {
    if (selectedMapName && !runtimeMaps[selectedMapName]) {
      setSelectedMapName(null)
    }
  }, [runtimeMaps, selectedMapName])

  const draftOrder = useMemo(() => getDraftOrder(startingTeam), [startingTeam])
  const banActions = actions.filter((action) => action.phase === "bans")
  const pickActions = actions.filter((action) => action.phase === "picks")
  const blueBans = banActions.filter((action) => action.team === "blue").map((action) => action.brawler)
  const redBans = banActions.filter((action) => action.team === "red").map((action) => action.brawler)
  const blueTeam = pickActions.filter((action) => action.team === "blue").map((action) => action.brawler)
  const redTeam = pickActions.filter((action) => action.team === "red").map((action) => action.brawler)
  const phase: Phase = banActions.length < 6 ? "bans" : pickActions.length < 6 ? "picks" : "complete"
  const currentTeam: Team | null = phase === "bans" ? getBanTeam(banActions.length) : phase === "picks" ? draftOrder[pickActions.length] : null

  const selectedMap = selectedMapName ? runtimeMaps[selectedMapName] ?? null : null

  const filteredMaps = Object.values(runtimeMaps).filter((map) =>
    (map.name + " " + map.mode).toLowerCase().includes(mapSearch.toLowerCase()),
  )

  const groupedMaps = useMemo(() => {
    const groups = filteredMaps.reduce<Record<string, GameMap[]>>((acc, map) => {
      const key = map.mode || "Other"
      if (!acc[key]) acc[key] = []
      acc[key].push(map)
      return acc
    }, {})

    return Object.entries(groups).map(([mode, maps]) => ({
      mode,
      maps,
    }))
  }, [filteredMaps])

  const filteredBrawlers = brawlers.filter((brawler) =>
    brawler.name.toLowerCase().includes(brawlerSearch.toLowerCase()),
  )

  const usedNames = new Set(actions.map((action) => action.brawler.name))

  function resetDraft(nextStartingTeam = startingTeam) {
    setStartingTeam(nextStartingTeam)
    setSelectedMapName(null)
    setActions([])
    setMapSearch("")
    setBrawlerSearch("")
    setIsMapPreviewOpen(false)
  }

  function selectMap(map: GameMap) {
    setSelectedMapName(map.name)
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

  function openAdmin() {
    if (isAdminAuthed) {
      setView("admin")
      return
    }

    setLoginError("")
    setShowLogin(true)
  }

  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      if (isSupabaseAdminConfigured()) {
        await signInAdmin(loginUsername, loginPassword)
        setIsAdminAuthed(true)
        setView("admin")
        setShowLogin(false)
        setLoginPassword("")
        setLoginError("")
        return
      }

      if (loginUsername === ADMIN_USERNAME && loginPassword === ADMIN_PASSWORD) {
        saveAdminSession({
          access_token: "local-demo",
          refresh_token: "local-demo",
          expires_at: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
          user: { id: "local-demo", email: loginUsername },
        })
        setIsAdminAuthed(true)
        setView("admin")
        setShowLogin(false)
        setLoginPassword("")
        setLoginError("")
        return
      }

      setLoginError("Invalid credentials.")
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed.")
    }
  }

  function handleLogout() {
    clearAdminSession()
    setIsAdminAuthed(false)
    setView("draft")
    setShowLogin(false)
    setLoginUsername("")
    setLoginPassword("")
    setLoginError("")
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMapPreviewOpen(false)
        setShowLogin(false)
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

  if (view === "admin" && isAdminAuthed) {
    return (
      <AdminDashboard
        maps={runtimeMaps}
        onMapsChange={setRuntimeMaps}
        onBackToDraft={() => setView("draft")}
        onLogout={handleLogout}
      />
    )
  }

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
          {mapSearch.trim() ? (
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
          ) : (
            <div className="map-groups">
              {groupedMaps.map((group) => (
                <section className="map-group" key={group.mode}>
                  <div className="panel-heading map-group-heading">
                    <h3>{group.mode}</h3>
                    <span>{group.maps.length}</span>
                  </div>
                  <div className="map-group-grid">
                    {group.maps.map((map) => (
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
                </section>
              ))}
            </div>
          )}
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

      <footer className="app-footer">
        <span>Draft Helper</span>
        <button type="button" onClick={openAdmin}>
          Admin Login
        </button>
      </footer>

      {showLogin ? (
        <div className="login-backdrop" onClick={() => setShowLogin(false)} role="presentation">
          <form className="login-modal" onClick={(event) => event.stopPropagation()} onSubmit={handleLoginSubmit}>
            <div className="panel-heading">
              <h2>Admin Login</h2>
              <button type="button" className="map-preview-close" onClick={() => setShowLogin(false)} aria-label="Close login">
                x
              </button>
            </div>
            <label>
              <span>Username</span>
              <input value={loginUsername} onChange={(event) => setLoginUsername(event.target.value)} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} />
            </label>
            {loginError ? <div className="login-error">{loginError}</div> : null}
            <button type="submit">Log in</button>
          </form>
        </div>
      ) : null}

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
              x
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
