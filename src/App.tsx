import { useState } from "react"
import { maps } from "./data/maps"
import { brawlers, type Brawler } from "./data/brawlers"
import BrawlerCard from "./components/BrawlerCard"

import "./App.css"

function App() {
  const [selectedMap, setSelectedMap] = useState("")
  const [brawlerSearch, setBrawlerSearch] = useState("")
  const [selectedBrawler, setSelectedBrawler] = useState<Brawler | null>(null)

  const [blueTeam, setBlueTeam] = useState<Brawler[]>([])
  const [redTeam, setRedTeam] = useState<Brawler[]>([])
  const [bans, setBans] = useState<Brawler[]>([])
  
  const mode = 
    selectedMap && maps[selectedMap as keyof typeof maps]
      ? maps[selectedMap as keyof typeof maps].mode
      : ""

  function canPick(brawler: Brawler) {
    return (
      !blueTeam.some(b => b.name === brawler.name) &&
      !redTeam.some(b => b.name === brawler.name) &&
      !bans.some(b => b.name === brawler.name)
    )
  }

  function pick(team: "blue" | "red") {
    if (!selectedBrawler) return
    if (!canPick(selectedBrawler)) return

    if (team === "blue") {
      if (blueTeam.length >= 3) return
      setBlueTeam([...blueTeam, selectedBrawler])
    } 
    
    if (team === "red") {
      if (redTeam.length >= 3) return
      setRedTeam([...redTeam, selectedBrawler])
    }
  }

  function ban() {
    if (!selectedBrawler) return
    if (!canPick(selectedBrawler)) return
    if (bans.length >= 6) return

    setBans([...bans, selectedBrawler])
  }

  return (
    <div className="app">
      <h1>Brawl Draft</h1>


      {/* Map Selection*/}
      <div className="card">
        <h2>Map</h2>

        <input placeholder="Select Map" value={selectedMap} onChange={(e) => setSelectedMap(e.target.value)}/>

        <div className="dropdown">
          {Object.keys(maps)
            .filter((m) =>
              m.toLowerCase().includes(selectedMap.toLowerCase())
            )
            .map((map) => (
              <div
              key={map}
              className="dropdown-item"
              onClick={() => setSelectedMap(map)}
              >
                {map}
              </div>
            ))}
        </div>

        <h3>Mode: {mode || "None"}</h3>

      </div>
      
      {/* Brawler Selection*/}
      <div className="card">
        <h2>Brawler Selector</h2>

        <input
          placeholder="Select Brawler"
          value={brawlerSearch}
          onChange={(e) => {
            setBrawlerSearch(e.target.value)
            setSelectedBrawler(null)
          }}

        />

        <div className="dropdown">
          {brawlers
            .filter((b) =>
              b.name.toLowerCase().includes(brawlerSearch.toLowerCase())
            )
            .map((b) => (
              <div
                key={b.name}
                className="dropdown-item"
                onClick={() => {
                  setSelectedBrawler(b)
                  setBrawlerSearch(b.name)
                }}
              >
                {b.name}
              </div>
            ))}
        </div>

        <div className="buttons">
          <button onClick={() => pick("blue")}>Pick Blue</button>
          <button onClick={() => pick("red")}>Pick Red</button>
          <button onClick={ban}>Ban</button>
        </div>

      </div>

      {/* Team Display*/}
      <div className="row">
        <div className="card">
          <h2>Blue Team</h2>

          <div className="team-display">
            {blueTeam.map((brawler) => (
              <BrawlerCard
                key={brawler.name}
                brawler={brawler}
              />
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Red Team</h2>

          <div className="team-display">
            {redTeam.map((brawler) => (
              <BrawlerCard
                key={brawler.name}
                brawler={brawler}
              />
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Bans</h2>

          <div className="team-display">
            {bans.map((brawler) => (
              <BrawlerCard
                key={brawler.name}
                brawler={brawler}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default App