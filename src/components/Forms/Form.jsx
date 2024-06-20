import { useState } from "react"

export default function Form(){
let [formData,setFormData] = useState({
    fullName: "",
    userName: ""})

let handleInputChange = (event)=>{
    // let fieldName = event.target.name
    // let value = event.target.value
   setFormData((prev) => {
    // prev[fieldName]   = value    
    //computed property name [], first value will evaluted , then 
    // it is used bcz fieldName is a variable
    return {...prev,[event.target.name]:event.target.value}
})
}

let handleSubmit = (event) =>{
event.preventDefault();
setFormData({
    fullName: "",
    userName: ""})
}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input 
            type="text" 
            placeholder="Enter Your Name" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br />
            <br />
             <label htmlFor="userName">User Name: </label>
            <input 
            type="text" 
            placeholder="Enter Your Name" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="userName"
            name="userName"
            />
            <br />
            <br />
             <label htmlFor="password">Password: </label>
            <input 
            type="password" 
            placeholder="Enter Your Password" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <button>Submit</button>
        </form>
        </>
    )
}