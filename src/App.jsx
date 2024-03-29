
// import './App.css'

import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"
import  AuroraHero  from "./components/AuroraHero"

function App() {
 const [toggleButton, setToggleButton] = useState(false)

  const handleToggle=()=>{
    // console.log("my name is tabinda noor")
    setToggleButton((pre)=>!pre)
  }

  return (
    <div className="vh-100">
      {
        toggleButton ? <GamePlay /> : <AuroraHero handleToggle= {handleToggle}/>
      }
    </div>
  )
}

export default App
