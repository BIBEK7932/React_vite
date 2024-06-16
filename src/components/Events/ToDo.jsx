import { useState } from "react"

export default function ToDo(){

    let [toDO,setTODO] = useState([])
    let [newTask,setNewTask] = useState("")
    let toDos = ()=>{

        setTODO((prev)=>{ return [...prev,newTask]})
        setNewTask("")
         
    }

    return(<>
    <label htmlFor="">Enter ToDo</label>
    <br />
    
    <input type="text"  placeholder="add task" value={newTask} onChange={(e)=>{setNewTask(e.target.value)
        // console.log(newTask)
    }}/>
    <button onClick={toDos}>Submit</button>
    <br />
    <hr />
    <h4>Task ToDo's</h4>
    <ul>
        {
            toDO.map((t)=>{
               return <li key={t}>{t}</li>
            })
        }
    </ul>
    </>)
}