import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div>
        <p className='text-2xl font-serif font-bold text-start '>Your score is <span className='text-4xl text-orange-300'>{score}</span>  </p>
    </div>
  )
}

export default TotalScore