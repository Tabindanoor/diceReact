import pic from "../assets/dice.jpeg"

const StartGame = ({handleToggle}) => {
        // console.log(handleToggle)


  return (


    <div className="flex p-10 justify-center text-center">
    <div>
        <img src={pic} alt="pic" />
    </div>

    <div>
        <p className="font-bold">DICE GAME</p>
        <p onClick={handleToggle}>Play Now</p>
    </div>


    </div>
  )
}

export default StartGame