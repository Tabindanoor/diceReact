import  { useState } from 'react'

const Dice = () => {
    const numbers=[1,2,3,4,5,6]
    const [clickDice, setClickDice] = useState()
    // console.log(clickDice)

  return (
    <div>
       
   {numbers.map((num,index)=>{
    return(
    <div key={index} onClick={()=>(setClickDice(num))} >
        {num}
    </div>
    )})
    }

    </div>
  )
}

export default Dice