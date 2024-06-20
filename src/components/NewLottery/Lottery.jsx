import React, { useState } from 'react';
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";
import './Lottery.css';


export default function Lottery({ n=3, winningCondition }) {
    let [ticket, setTicket] = useState(getTicket(n));

    let isWinning = winningCondition(ticket)

    let buyTicket = () => {
        setTicket(getTicket(n));
        
    };

    return (
        <div className="lottery-container">
            <h1 className="lottery-title">Lottery Game (Sradhya di)</h1>
            {isWinning ? <h3 className="lottery-win">Congratulations, you won!</h3> : null}
            <Ticket ticket={ticket} />
            <button className="lottery-button" onClick={buyTicket}>Buy New Ticket</button>
          
        </div>
    );
}
