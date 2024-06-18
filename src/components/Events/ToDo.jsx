import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDo.css';

export default function ToDo() {
    let [toDo, setToDo] = useState([{ task: "", id: uuidv4(),isDone: false }]);
    let [newTask, setNewTask] = useState("");
    let [update, setUpdate] = useState({ id: null, task: "" });


    let toDos = () => {
        if (newTask === "") {
            alert("Enter a valid task");
        } else {
            setToDo((prev) => { return [...prev, { task: newTask, id: uuidv4(),isDone: false }] });
            setNewTask("");
        }
    };

    let deleteTask = (id) => {
        setToDo((prev) => prev.filter((data) => {
            return data.id != id
        }))

    }

    let upadateTask = (id, t) => {
        setToDo((prev) => prev.map((data) => data.id === id ? { ...data, task: t } : data))
        // setUpdate({ id: null, task: "" }); 
        console.log(toDo)
    }
    let upperAll = () => {
        setToDo((prev) => prev.map((data) => { return { ...data, task: data.task.toUpperCase() } }))
    }
    let upperCase = (id) => {
        setToDo((prev) => prev.map((data) => (data.id == id) ? { ...data, task: data.task.toUpperCase() } : data))
    }
    let lowerCase = (id) => {
        setToDo((prev) => prev.map((data) => (data.id == id) ? { ...data, task: data.task.toLocaleLowerCase() } : data))
    }
    let makeDone = (id) => {
     
     setToDo((prev) =>
        prev.map((data) => (data.id === id ? { ...data, isDone: true } : data))
    )
   console.log(toDo)
    }


    return (
        <div className="todo-container">
            <label className="todo-label">Enter ToDo:</label>

            <input
                value={newTask}
                className="todo-input"
                placeholder="Add task"
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="todo-button" onClick={toDos}>Submit</button>
            <br />
            <hr />
            <h4 className="todo-title">Tasks To Do</h4>
            <ul className="todo-list">
                {toDo.map((t) => t.task !== "" && <li key={t.id} className="todo-item">
                  
                  {t.isDone ?  <span className="doneTask">{t.task}</span> : <span>{t.task}</span>}  
                 
                    
                                       <br />
                    <textarea
                        className="todo-textarea"
                        value={t.id === update.id ? update.task : t.task}
                        onChange={(e) => {
                            setUpdate({ id: t.id, task: e.target.value });
                            // console.log("Current Update:", { id: t.id, task: e.target.value });
                        }}
                    ></textarea>
                    <button className="todo-update-button" onClick={() => { upadateTask(t.id, update.task) }} >Update</button>

                    <button className="doneButton" onClick={() => deleteTask(t.id)}  >Delete</button>
                    <button className="todo-update-button" onClick={() => upperCase(t.id)}>UpperCase</button>
                    <button className="todo-update-button" onClick={() => lowerCase(t.id)}>LowerCase</button>
                    <button className="doneButton" onClick={() => makeDone(t.id)}  >Done</button>
                </li>)}
            </ul>
            <button onClick={upperAll}>Uppercase All</button>
        </div>
    );
}
