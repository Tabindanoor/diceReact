import  { useState } from 'react'

const RoleDice = ({selectedDice, setSelectedDice,rollDice,setScore}) => {
    const [rules,setRules] = useState(false)
    // const [selectedDice, setSelectedDice] = useState(1)

    // const randomeGenerator=(min, max)=>{
    //     return (Math.ceil(Math.random() * (max - min) + min)) 
    // }

    // const rollDice=()=>{

    //     const diceValue = randomeGenerator(1,6)
    //     setSelectedDice(diceValue)
    // }

    const handleRules=()=>{
        setRules((pre)=>!pre);
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
        <button onClick={()=>{setScore(0)}}>Reset Score</button>
        <br />
        <br />
        <button onClick={handleRules}>{rules ? "Hide":"Show"} rules</button>
        {  rules &&
             <p>
            select any number <br />
            Clcik on dice image <br />
            after click on dice if selected number is equal to dice number you will get some point as dice <br />
            if you get wrong guess then 2 points will be deducted
        </p>
        }
      
    </div>
  )
}

export default RoleDice