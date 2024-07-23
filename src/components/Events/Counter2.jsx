import { useState,useEffect } from "react"

export default function Counter2(){
let [countx,setCountx] = useState(0)
let [county,setCounty] = useState(0)
let incrementx = ()=>{
    setCountx((prev)=> prev+1)
}
let incrementy = ()=>{
    setCounty((prev)=> prev+1)
}
useEffect(function hi(){
    console.log("x pressed")
},[])
    return(
        <div>
<h1>Countx = {countx}</h1>
<button onClick={incrementx}>+1</button>
<h1>County = {county}</h1>
<button onClick={incrementy}>+1</button>
        </div>
    )
}