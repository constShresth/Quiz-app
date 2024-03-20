import { useContext } from "react";
import "../App.css"
import { GameStateContext } from "../helpers/Contexts";
function Menu() {

  const {  setGameState, userName, setUserName } = useContext(GameStateContext)
  return (
    <div className="menu" action="/">
      {/* <label htmlFor="name"><h2>Name:</h2></label> */}
      <input type="text" placeholder="Enter your name" id="name" value={userName} onChange={(event) => {
        setUserName(event.target.value)
      }} required/>
      <button id="last-btn" onClick={() => {
        setGameState("playing")
      }}>Start quiz</button>
    </div>
  )
}

export default Menu;