
import { PRODUCTS } from "../../product";
import Product from "./Product";
import "./shop.css";


const shop = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>FarmEq Market</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
       <Product key ={product.id} data = {product}/>
      ))}
    </div>
  </div>
  )
}

export default shop
 
