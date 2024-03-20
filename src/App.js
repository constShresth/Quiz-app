import Menu from "./components/Menu"
import Quiz from "./components/Quiz"
import Endscreen from "./components/Endscreen"
import './App.css';
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts"

function App() {

  const [gameState, setGameState] = useState("menu")
  //menu,playing
  const [userName, setUserName] = useState("")
  const [score, setScore] = useState(0)


  return (
    <div className="App">
      <h1>Quiz</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, userName, setUserName ,score, setScore}}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState==="end" && <Endscreen/>}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
