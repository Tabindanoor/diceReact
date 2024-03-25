import { useState } from "react"
import Dice from "./Dice"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"

const GamePlay = () => {

  const [selectedDice, setSelectedDice] = useState(1)
  const [clickDice, setClickDice] = useState()
  console.log(clickDice)
  const [error,setError] = useState()
  const [score,setScore] = useState(0)


  const randomeGenerator=(min, max)=>{
    return (Math.ceil(Math.random() * (max - min) + min)) 
}

const rollDice=()=>{

  if(!clickDice){
      setError("please select a random dice")
      return
    }

    setError("")

    const diceValue = randomeGenerator(1,6)
    setSelectedDice(diceValue)

    

    if(clickDice===diceValue){
        setScore((pre)=>pre+diceValue)
    }
    else{
      setScore((pre)=>pre-2)
    }

    setClickDice(undefined)
}




  return (
    <div>

        <TotalScore score={score}   />
 
        <Dice  clickDice={clickDice} setClickDice={setClickDice} error={error}  setError={setError} />

        <RoleDice setScore ={setScore} selectedDice={selectedDice}  rollDice={rollDice} setSelectedDice={setSelectedDice}/>



    </div>
  )
}

export default GamePlay