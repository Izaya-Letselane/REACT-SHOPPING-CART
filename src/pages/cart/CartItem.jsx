import { useContext } from "react";
import { ShopContext} from "../../context/ShopContextProvider";

const CartItem = (props) => {
    const {id, productImage, price, productName} = props.data;
    const {  cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className="cartItem">
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>R{price}</p>
        </div>
        <div className="countHandler">
            <button onClick={()=> removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
        
    </div>
   

  )
}

export default CartItem
