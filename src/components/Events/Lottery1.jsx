import { useState } from "react"
import './Lottery.css'
export default function Lottery1() {
    let [lottery, setLottery] = useState({ num: null, isWin: false })
    let newTicket = () => {
        let number = Math.floor(Math.random() * 1000).toString()
        let sum = 0
        for (let c of number) {
            // console.log(c)
            sum += parseInt(c)
        }

        setLottery({ num: number.toString().padStart(3, '0'), isWin: sum===15 })
        console.log(lottery)

    }

    return (
        <>
        <div className="lottery-container1">
                <h3 className="lottery-title1">Lottery</h3>
                {lottery.isWin ? <h3 className="lottery-message1">Congratulations, you won!</h3> : null}
                <p className="lottery-ticket1">Lottery Ticket: {lottery.num !== null ? lottery.num : 'No Ticket Yet'}</p>
                <button className="lottery-button1" onClick={newTicket}>Get New Ticket</button>
            </div>
        </>
    )
}