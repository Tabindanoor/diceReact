import  { useState } from 'react'

const Dice = ({clickDice,setClickDice,setError,error}) => {
    const numbers=[1,2,3,4,5,6]
    // const [clickDice, setClickDice] = useState()
    // console.log(clickDice)
    const handleClick=(num)=>{
      setClickDice(num)
      setError("")
    }

  return (
    <div>
       {error}
   {numbers.map((num,index)=>{
    return(
    <div key={index} onClick={()=>{handleClick(num)}} >
        {num}
    </div>
    )})
    }

    </div>
  )
}

export default Dice