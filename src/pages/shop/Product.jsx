import { useContext } from "react";
import { ShopContext} from "../../context/ShopContextProvider";
const Product = (props) => {
    const {id, productName, productImage,price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
     <img src= {productImage} style={{height:"300px"}} />
     <div className="description">
        <p><b>{productName}</b></p>
        <p>R{price}</p>
     </div>
     <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product


