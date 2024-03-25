
// import './App.css'

import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"

function App() {
 const [toggleButton, setToggleButton] = useState(false)

  const handleToggle=()=>{
    console.log("my name is tabinda noor")
    setToggleButton((pre)=>!pre)
  }

  return (
    <>
{
  toggleButton ? <GamePlay /> : <StartGame handleToggle= {handleToggle}/>
}
    
 {/* <StartGame  /> */}
    </>
  )
}

export default App
