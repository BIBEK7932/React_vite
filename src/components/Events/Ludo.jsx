import { useState } from "react"

export default function Ludo(){
// let [blueMove,setBlueMove] = useState(0)
// let [redMove,setRedMove] = useState(0)
// let [greenMove,setGreenMove] = useState(0)
// let [yellowMove,setYellowMove] = useState(0)

let [moves,setMoves] = useState({blue: 0,red: 0,green: 0,yellow: 0}) // State object
  let [arr,setArr] = useState(["no moves"])

let upadateBlue = () =>{
    console.log(moves)
    
    setArr( (prevArr) =>{ return [...prevArr,"blue moves"]}) // spred new arr
    console.log(arr)
  setMoves((prevMoves)=>{ return {...prevMoves, blue: prevMoves.blue+1}}); // make a copy of original object.. to chane the address of the obj
  }
  let upadateRed = () =>{
    console.log(moves)
    setArr( (prevArr) =>{ return [...prevArr," Red moves"]})
    setMoves( (prevMoves)=>{ return {...prevMoves, red: prevMoves.red+1}}); // make a copy of original object.. to chane the address of the obj
  }
  let upadateGreen = () =>{
    console.log(moves)
    setArr( (prevArr) =>{ return [...prevArr," Green moves"]})
    setMoves( (prevMoves)=>{ return {...prevMoves, green: prevMoves.green+1}}); // make a copy of original object.. to chane the address of the obj
  }
  let upadateYellow = () =>{
    console.log(moves)
    setArr( (prevArr) =>{ return [...prevArr," Yellow moves"]})
    setMoves( (prevMoves)=>{ return {...prevMoves, yellow: prevMoves.yellow+1}}); // make a copy of original object.. to chane the address of the obj
  }

return(
        <div>
            <h3>Game Start!...</h3>

            <h6>{arr}</h6>

            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={upadateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={upadateRed} style={{backgroundColor: "red"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={upadateGreen} style={{backgroundColor: "lightgreen"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={upadateYellow} style={{backgroundColor: "yellow"}}>+1</button>

            </div>

        </div>
    )
}