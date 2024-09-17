import { PRODUCTS } from '../../product'
import { ShopContext} from "../../context/ShopContextProvider";
import './cart.css'
import CartItem from './CartItem';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart item</h1>
        </div>
        <div className="cartItemS">
            {PRODUCTS.map((product) =>{
                if(cartItems[product.id] !== 0){
                  return <CartItem key ={product.id} data = {product}/>
                }
            })}
        </div>
        {totalAmount > 0?<div className="checkout">
          <p><b>Subtotal: R{totalAmount}</b></p>
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div> : <h1>Your Cart Is Empty</h1> }
        
      
    </div>
  )
}

export default Cart
