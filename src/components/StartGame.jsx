import pic from "../assets/dice.jpeg"

const StartGame = ({handleToggle}) => {
        // console.log(handleToggle)


  return (


    <div className="flex  justify-center text-center  ">

    <div className="flex  justify-center text-center ">
        <img src={pic} className="w-full" alt="pic" />
    </div>

    <div className="w-[50%] text-start" >
        <p className="font-bold te">DICE GAME</p>
        <p onClick={handleToggle}>Play Now</p>
    </div>

    </div>
  )
}

export default StartGame