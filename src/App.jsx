import { useState } from 'react'

// TODO List
// - Add Top Navigation
//   - Spot for current reward amount (starts at 2000, every second that passes you lose 100)
//
function App() {
  const [gameMode, setGameMode] = useState("")
 
  return <div>
    <div className='underline bg-red-400'>Select Difficulty</div>
    <div>
    <div onMouseDown={() => setGameMode("Jerry")}>Jerry Mode (Easy)</div>
    <div onMouseDown={() => setGameMode("Schwifty")}>Schwifty Mode (Medium)</div>
    <div onMouseDown={() => setGameMode("Birdperson")}>Birdperson Mode (Intermediate)</div>
    <div onMouseDown={() => setGameMode("Wubba")}>Wubba Lubba Dub Dub Mode (Hard)</div>
    </div>
    </div>
}

export default App
