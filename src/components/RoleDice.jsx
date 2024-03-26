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
      <br />
        <div onClick={rollDice}>
            <img src={`/public/${selectedDice}.jpeg`}  className='w-full' alt="" />
            {/* <img src="/public/3.jpeg" alt="" /> */}
        </div>
        <br />
        <p>Click on Dice to roll</p>
        <br />
        <div className='flex '>
                  <button className='bg-purple-400 text-purple-950 rounded-2xl text-lg mx-auto justify-center border-4 border-purple-800 hover:text-blue-950 hover:bg-blue-400' onClick={()=>{setScore(0)}}>Reset Score</button>
                   <button className='bg-yellow-400 text-purple-950 rounded-2xl  text-lg mx-auto justify-center border-4 border-purple-800 hover:text-blue-950 hover:bg-pink-400' onClick={handleRules}>{rules ? "Hide":"Show"} rules</button>
      </div>
        <br />
        <br />
        {  rules &&
             <p className='p-4 text-lime-500 bg-amber-950 rounded-2xl shadow-lg border-4 border-lime-300'>
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