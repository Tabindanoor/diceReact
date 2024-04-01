import  { useState } from 'react'

const RoleDice = ({selectedDice, setSelectedDice,rollDice,setScore}) => {
    const [rules,setRules] = useState(false)
   
    const handleRules=()=>{
        setRules((pre)=>!pre);
    }
  return (
    <div>
      <br />
        <div onClick={rollDice}>
            <img src={`/public/${selectedDice}.jpeg`}  className=' mx-auto justify-center' alt="" />
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
             <p className='p-4  text-black bg-slate-400 w-96  rounded-2xl shadow-lg border-4 border-black'>
            select any number <br />
            Click on dice image <br />
            after click on dice if selected number is equal to dice number you will get some point as dice <br />
            if you get wrong guess then 2 points will be deducted
        </p>
        }
      
    </div>
  )
}

export default RoleDice