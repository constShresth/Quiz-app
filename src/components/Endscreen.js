import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import Questions from "../helpers/Questions";

function Endscreen(){

    const{score, userName, setScore, setGameState} = useContext(GameStateContext)

    function restart(){
        setScore(0)
        setGameState("menu")
    }

    return(
        <div className="end">
            <h1>Finished</h1>
            <h3>Name: {userName}</h3>
            <h1>Score:</h1>
            <h1>{score}/{Questions.length}</h1>
            <button id="last-btn" onClick={restart}>Restart Quiz</button>
        </div>
    )
}

export default Endscreen;