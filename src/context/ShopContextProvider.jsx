import { createContext, useState } from "react"
import { PRODUCTS } from "../product";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i< PRODUCTS.length + 1; i++) {
        cart[i] = 0; 
    }
     return cart;
};

const ShopContextProvider = (props) => {
    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo =PRODUCTS.find((product) => product.id === Number(item));
                totalAmount+= cartItems[item] * itemInfo.price;
                
            }
        }
        return totalAmount;

    }
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (ItemId) =>{
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1} ))
    }
    const removeFromCart = (ItemId) =>{
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1} ))
    }
    const updateCartItemCount = (newAmount, ItemId) =>{
        setCartItems((prev) => ({...prev, [ItemId]: newAmount}))
    }

    console.log(cartItems)

    const contextValue = {setCartItems, addToCart, removeFromCart, cartItems, updateCartItemCount, getTotalAmount};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}

    </ShopContext.Provider>
  )
}

export default ShopContextProvider
