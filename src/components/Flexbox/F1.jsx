import React, { useEffect } from "react";
import './f1.css'

export default function F1(){
 useEffect(()=>{
    document.querySelector('.close').addEventListener('click',()=>{
        document.querySelector('.popup').style.display = "none";
    })
    document.querySelectorAll('.container .block button').forEach(button => {
button.addEventListener('click', () => {
    document.querySelector('.popup').style.display = "flex";
    const block = button.closest('.block');
    const imgSrc = block.querySelector('.img1').src;
    const pra = block.querySelector('span').textContent
    document.querySelector('.popup .block .img1').src = imgSrc;
    document.querySelector('.popup .block span').textContent = pra;
});
});
 },[])

    return(
        <div>
        <div className="container">
    <div className="block">
        <img src="../Images/krishna.jpeg" alt="krishna" className="img1" />
        <span>Krishna</span>
        <button>View</button>
    </div>
    <div className="block">
        <img src="/Images/nature1.jpeg" alt="nature" className="img1" />
        <span>Nature</span>
        <button>View</button>
    </div>
    <div className="block">
        <img src="../Images/butterfly.jpeg" alt="butterfly" className="img1" />
        <span>Butterfly</span>
        <button>View</button>
    </div>
    <div className="block">
        <img src="../Images/hunumanji.jpeg" alt="hunumanji" className="img1" />
        <span>Hunumanji</span>
        <button>View</button>
    </div>
    <div className="block">
        <img src="../Images/rohit.webp" alt="rohit" className="img1" />
        <span>Rothit</span>
        <button>View</button>
    </div>
    <div className="block">
        <img src="../Images/Nature2.jpeg" alt="Nature2" className="img1" />
        <span>Nature2</span>
        <button>View</button>
    </div>
</div>
<div className="popup">
    <div className="container">
        <div className="block">
            {/* <a href="" className="close"></a> */}
            <img src="../Images/close.png" alt="" className="close" />
            <img src="../Images/krishna.jpeg" alt="krishna" className="img1" />
            <span>Krishna</span>
            {/* <button>View</button> */}
        </div>
    </div>
</div>

        </div>
    )
}