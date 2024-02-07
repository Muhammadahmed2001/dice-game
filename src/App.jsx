
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {
  const [isGameStarted, SetIsGameStarted] = useState(true)



  const toggleGamePlay = () => {
    SetIsGameStarted((prev) => !prev);
  }
  return (



    <div>

      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}

    </div>
  )
}

export default App
