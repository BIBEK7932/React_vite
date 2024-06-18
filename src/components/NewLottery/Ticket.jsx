import TicketNum from "./TicketNum";
import './Ticket.css';

export default function Ticket({ ticket }) {
    return (
        <div className="ticket-container">
            <p className="ticket-title">Ticket:</p>
            <div className="ticket-numbers">
                {ticket.map((num, idx) => {
                    return <TicketNum num={num} key={idx} />;
                })}
            </div>
        </div>
    );
}

