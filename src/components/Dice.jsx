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
  <p className='text-lg font-mono text-red-600'>{error}</p>
  <br />
  <div className='flex'>
      {numbers.map((num, index) => (
          <div key={index} className='p-2'>
              <span className=' border px-4 py-3  border-green-500 border-solid text-center hover:text-white hover:bg-green-400' onClick={() => handleClick(num)}>
                  {num}
              </span>
          </div>
      ))}
  </div>
</div>
  )
}

export default Dice