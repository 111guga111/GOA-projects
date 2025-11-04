import { createContext, useState } from "react";

export const cartContext = createContext()



function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)

    const HandleAdd = (item) => {
        const itemInCart = cart.find(cartItem => cartItem.name === item.name);
        
        if (itemInCart) {
           
            const updatedCart = cart.map(cartItem =>
            cartItem.name === item.name
                ? { ...cartItem, amount: cartItem.amount + 1 }
                : cartItem
            );
            setCart(updatedCart);
            
        } else {
            
            setCart([...cart, { ...item, amount: 1 }]);
        }

        setCount(prev => prev + 1)
    }
    const handleRemove = (item) =>{
        setCart(cart.filter(som => som.name != item.name))
        setCount(prev => prev - 1)
    }

    const increase = (item) =>{
        setCart(cart.map(cartItem =>
            cartItem.name === item.name
                ? { ...cartItem, amount: cartItem.amount + 1 }
                : cartItem
            )
        )
    }
    const decrease = (item) =>{
        const cartItem = cart.find(c => c.name === item.name);
        if (!cartItem) return;

        cartItem.amount == 1? 
            handleRemove(cartItem)
            : 
            setCart(cart.map(c =>
                c.name === item.name ? { ...c, amount: c.amount - 1 } : c
            )
        );
    }

    return(
        <cartContext.Provider value={ {cart, count,setCount,setCart, HandleAdd, increase, decrease, handleRemove} }>
            {children}
        </cartContext.Provider>
    )
    
}


export default CartProvider; 