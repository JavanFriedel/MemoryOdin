import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [gameMode, setGameMode] = useState("")
 
  return <div>
    <div className='underline bg-red-400'>Select Difficulty</div>
    <div>
    <div>Jerry Mode (Easy)</div>
    <div>Schwifty Mode (Medium)</div>
    <div>Birdperson Mode (Intermediate)</div>
    <div>Wubba Lubba Dub Dub Mode (Hard)</div>
    </div>
    </div>
}

export default App
