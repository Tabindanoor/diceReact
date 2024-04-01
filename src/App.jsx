
import  { useEffect, useState } from "react";
import GamePlay from "./components/GamePlay"
import  AuroraHero  from "./components/AuroraHero"
import Example from "./components/Example"


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toggleButton, setToggleButton] = useState(false)

  const handleToggle=()=>{
    // console.log("my name is tabinda noor")
    setToggleButton((pre)=>!pre)
  }

  // Simulating a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <Example />
      ) : (
        <div>
        
          {
        toggleButton ? <GamePlay /> : <AuroraHero handleToggle= {handleToggle}/>
      }
        </div>
      )}
    </div>
  );
};

export default App;

