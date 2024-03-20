import { useContext, useState } from "react";
import { GameStateContext } from "../helpers/Contexts";
import Questions from "../helpers/Questions";

function Quiz() {

  const {setGameState, setScore} = useContext(GameStateContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState(null)
  const [bool, setBool] = useState(false)
  const [bool2, setBool2] = useState(null)

  function handleOption(option) {
    setOptionChosen(option)
  }

  function check() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(val=>val+1)
      setBool2(true)
    } else {
      setBool2(false)
    }
    setBool(true)
  }

  function nextQuestion() {
    if(currentQuestion===Questions.length-1){
      setGameState("end")
    }
    else{
      setCurrentQuestion(val=> val + 1)
    }
    setBool(false)
    setBool2(null)
  }

  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].questionText}</h1>
      <div className="options">
        {Questions[currentQuestion].options.map((option, index) => {
          return (
            <button key={index} onClick={() => handleOption(option)} 
            style={
              optionChosen===option ? bool2===true ? { backgroundColor: "#5FD068" }: bool2===null?{ backgroundColor: "#1B2430" }:{ backgroundColor: "#DD5353" }  : null
            }
            >
              {option}
            </button>
          )

        })}
      </div>
      <button id="last-btn" onClick={bool && nextQuestion || check}>{bool ? currentQuestion===Questions.length-1 ? "Finish":"Next Question" : "Check"}</button>
    </div>
  )
}

export default Quiz;