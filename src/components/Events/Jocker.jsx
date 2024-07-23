import { useEffect, useState } from "react"
export default function Jocker(){

const getJoke = async ()=>{
let res = await fetch('https://official-joke-api.appspot.com/random_joke')
let data =  await res.json()
setJoke({setup: data.setup,punchline: data.punchline})
console.log(data)
return data;

}
let [joke,setJoke] = useState(getJoke)
useEffect( ()=>{
    async function getFirstJoke() {
        let res = await fetch('https://official-joke-api.appspot.com/random_joke')
        let data =  await res.json()
        setJoke({setup: data.setup,punchline: data.punchline})
    }
    getFirstJoke();
} ,[])
    return(
        <div>
            <h1>Jocker</h1>
            <h2>{joke.setup}</h2>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>Get Joke</button>
        </div>
    )
}