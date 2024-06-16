import Product from "./Product";
import './Product.css'
export default function ProductTab(){
let feature = ["fast","longlasting","backup"]
let features = [<li>fast</li>,<li>longlasting</li>,<li>backup</li>]


    return(<div className="ProductTab">
      <Product title="laptop "  indx={0} description="Mackbook 3 , 4Gb ram"price={65000} features={feature}/>
      <Product title="mobaile"  indx={1} description="65Mp camera "price={15000}/>
      <Product title="Tab"  indx={2} description="10.4 inch" price={25000}/>
      <Product  title="charger" indx={3} description="128watt" price={2000}/>
    </div>)
}