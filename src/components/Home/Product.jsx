import './Product.css'
import Price from './Price'
import pic from './a.png'
function Product({ title, indx }) {

let oldPrices = ["₹65,000","₹15,000","₹25,000","₹800"]
let newPrices = ["₹61,750","₹14250","₹23750","₹760"]
let descriptions = [["Mackbook 3,4Gb RAM"," Hight quality Cmaera"],["65Mp Camera"],["10.4 inch display"],["128 watt"]]
    
return (
        <div className='Product'>
            <h3>{title.toUpperCase()}</h3>
           {/* <img src={pic} alt="image" height="150px" width="150px" /> */}
            <p>Description: <b>{descriptions[indx][0]}</b></p>
            <p><b>{descriptions[indx][1]}</b></p>
           
            <Price oldPrice={oldPrices[indx]}  newPrice={newPrices[indx] }/>
        </div>
    )
}

export default Product;


 // let fet = features.map((feature)=> <li>{feature}</li>)
//  let isDiscount = price > 30000

//  let style = { backgroundColor: isDiscount ? "lightgreen" : "" }
  /* <div className="Product" style={style}>
    <h1 className="Product-title">{title}</h1>
    <h4 className="Product-description">Price: {price}</h4>
    
     {price>30000?< h3> Discount of 5% </h3>: null} 
    
    {isDiscount && < h3> Discount of 5% </h3>}
    
    { features   ? <p>{features.map((feature)=> <li key={feature}>{feature}</li>)}</p> : null }
    
    
    
    </div> */