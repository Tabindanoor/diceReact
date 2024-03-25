import React, { useState } from 'react'

const RoleDice = () => {
    const [selectedDice, setSelectedDice] = useState(1)

    const randomeGenerator=(min, max)=>{
        return (Math.ceil(Math.random() * (max - min) + min)) 
    }

    const rollDice=()=>{

        const diceValue = randomeGenerator(1,6)
        setSelectedDice(diceValue)
    }

  return (
    <div>
        <div onClick={rollDice}>
            <img src={`/public/${selectedDice}.jpeg`} alt="" />
            {/* <img src="/public/3.jpeg" alt="" /> */}
        </div>
        <br />
        <p>Click on Dice to roll</p>
        <br />
        <button>Reset Score</button>
        <br />
        <button>Show rules</button>
    </div>
  )
}

export default RoleDice