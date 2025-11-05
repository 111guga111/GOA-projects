import { useEffect } from "react";
import { createContext, useState } from "react";

export const cartContext = createContext()



function CartProvider({children}){
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem('Cart')) ||[])
    const [count, setCount] = useState(0)

    useEffect(()=>{
        localStorage.setItem('Cart', JSON.stringify(cart))

        const all = cart.reduce((acc,cur)=> acc + cur.amount, 0)
        

        setCount(all)
    },[cart])

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

        
    }
    const handleRemove = (item) =>{
        setCart(cart.filter(som => som.name != item.name))
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