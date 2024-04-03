// import { useState } from "react"
// import Dice from "./Dice"
// import RoleDice from "./RoleDice"
// import TotalScore from "./TotalScore"

// const GamePlay = () => {

//   const [selectedDice, setSelectedDice] = useState(1)
//   const [clickDice, setClickDice] = useState()
//   console.log(clickDice)
//   const [error,setError] = useState()
//   const [score,setScore] = useState(0)


//   const randomeGenerator=(min, max)=>{
//     return (Math.ceil(Math.random() * (max - min) + min)) 
// }

// const rollDice=()=>{

//   if(!clickDice){
//       setError("please select a random dice")
//       return
//     }

//     setError("")

//     const diceValue = randomeGenerator(1,6)
//     setSelectedDice(diceValue)

    

//     if(clickDice===diceValue){
//         setScore((pre)=>pre+diceValue)
//     }
//     else{
//       setScore((pre)=>pre-2)
//     }

//     setClickDice(undefined)
// }

//   return (
//     <div>

//         <TotalScore score={score}   />
 
//         <Dice  clickDice={clickDice} setClickDice={setClickDice} error={error}  setError={setError} />

//         <RoleDice setScore ={setScore} selectedDice={selectedDice}  rollDice={rollDice} setSelectedDice={setSelectedDice}/>

//     </div>
//   )
// }

// export default GamePlay




import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react"
import Dice from "./Dice"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

 const GamePlay = ({handleToggle}) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [selectedDice, setSelectedDice] = useState(1)
  const [clickDice, setClickDice] = useState()
  // console.log(clickDice)
  const [error,setError] = useState()
  const [score,setScore] = useState(0)


  const randomeGenerator=(min, max)=>{
    return (Math.ceil(Math.random() * (max - min) + min)) 
}

const rollDice=()=>{

  if(!clickDice){
      setError("please select a random dice :(")
      return
    }

    setError("")

    const diceValue = randomeGenerator(1,6)
    setSelectedDice(diceValue)

    

    if(clickDice===diceValue){
        setScore((pre)=>pre+diceValue)
    }
    else{
      setScore((pre)=>pre-2)
    }

    setClickDice(undefined)
}

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-5 py-24 text-gray-200"
    >
    <TotalScore score={score}   />
         <Dice  clickDice={clickDice} setClickDice={setClickDice} error={error}  setError={setError} />
        <RoleDice setScore ={setScore} selectedDice={selectedDice}  rollDice={rollDice} setSelectedDice={setSelectedDice}/>
    </motion.section>
  );
};


export default GamePlay