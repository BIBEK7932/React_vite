import { useState } from "react"

export default function Like(){
   let [like,setLike] = useState(0)
   let [isLiked,setIsLiked] = useState(false)
   let toggleLike = ()=>{

    
    setIsLiked(!isLiked)
    !isLiked? setLike(like+1) :setLike(like-1)
   }
   let listStyle = {color : "red"}
    return(
<>
<p onClick={toggleLike}>
    {isLiked?<i className="fa-solid fa-heart" style={listStyle}></i>:<i className="fa-regular fa-heart"></i>}
    
    </p>
    <p>{like}</p>

</>
    )
}