
import Like from "../Events/Like"
export default function Price({newPrice,oldPrice}){
let oldStyle = {
    textDecorationLine : "line-through"
}
let newStyle = {
    fontWeight: "bold"
}
    return(
        <div className="Price">
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;    &nbsp;
            <span style={newStyle}>{newPrice}</span>
            &nbsp;    &nbsp;
            &nbsp;    &nbsp;
            <Like/>
        </div>
    )
}