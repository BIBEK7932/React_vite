import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDo.css'; 

export default function ToDo() {
    let [toDo, setToDo] = useState([{ task: "", id: uuidv4() }]);
    let [newTask, setNewTask] = useState("");

    let toDos = () => {
        if (newTask === "") { 
            alert("Enter a valid task");
        } else {
            setToDo((prev) =>{ return [...prev, { task: newTask, id: uuidv4() }]} );
            setNewTask("");
        }
    };

let  deleteTask  = (id)=>{
        let newtoDo = toDo.filter((data)=>{
            return data.id != id
        })
        // console.log(toDo)
        setToDo( (prev)=> prev.filter((data)=>{
            return data.id != id
        }))
        // alert(id)
        console.log(id)

    }

    return (
        <div className="todo-container">
            <label className="todo-label">Enter ToDo:</label>
            <br />
            <input 
                type="text" 
                className="todo-input"
                placeholder="Add task" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button className="todo-button" onClick={toDos}>Submit</button>
            <br />
            <hr />
            <h4 className="todo-title">Tasks To Do</h4>
            <ul className="todo-list">
                {toDo.map((t) => t.task !== "" && <li key={t.id} className="todo-item">
                   <span>{t.task}</span> 
                   &nbsp;
                   <button className="doneButton" onClick={()=> deleteTask(t.id)}  >Done</button>
                    </li>)}
            </ul>
        </div>
    );
}
