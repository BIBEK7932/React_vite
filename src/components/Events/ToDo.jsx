import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){

    let [toDO,setTODO] = useState([{task:"",id: uuidv4()}])
    let [newTask,setNewTask] = useState("")
    let toDos = ()=>{
        if(newTask == "") { prompt("Enter Some Valid Task")}
if(newTask != ""){setTODO((prev)=>{ return [...prev,{task:newTask,id:uuidv4()}]})}
        
        setNewTask("")
         
    }

    return(<>
    <label >Enter ToDo : </label>
    <br />
    
    <input type="text"  placeholder="add task" value={newTask} onChange={(e)=>{
        setNewTask(e.target.value)
        // console.log(newTask)
    }}/>
    <button onClick={toDos}>Submit</button>
    <br />
    <hr />
    <h4>Task ToDo's</h4>
    <ul>
        {
            toDO.map((t)=>{
                if(t.task != "")
               return <li key={t.id}>{t.task}</li>
            })
        }
    </ul>
    </>)
}