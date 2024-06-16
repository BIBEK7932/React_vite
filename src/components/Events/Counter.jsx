import { useState } from "react"
export default function Counter(){
    let [count,setCount] = useState(0)// initilization line , ignores while ReRendering
let inCount = ()=>{
    // setCount(count+1);// Value update in render stage
    // setCount(count+1);//THis will not work 2nd time bcz it asyncronus
    setCount((currentCount) => {return currentCount+1})
    // setCount((currentCount) => {return currentCount+1}) // it work syncronusly
    
    // ** component re render when state value is changed , React automaticly detect it
    //setCount(25)  
    console.log(count)
}
    return(
        <div>
            <h2> Count = {count}</h2>
            <button onClick={inCount}>Increment</button>
        </div>
    )

}

// fun() => its means execution
// fun => reffernce ** alwels preffer it