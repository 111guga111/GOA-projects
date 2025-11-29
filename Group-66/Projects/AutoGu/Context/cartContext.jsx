import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);


export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))     
    },[cart])



    const handleAdd = (car) => {
        
        const exists = cart.find(c => c.model === car.model);
        if (exists) {
            handleIncrease(exists);
        } else {
            setCart(prev => [...prev, { ...car, amount: 1 }]);
        }
    }

    const handleRemove = (car) => {
        setCart(cart.filter(c => c.model !== car.model));
    }

    const handleIncrease = (car) => {
        setCart(cart.map(c =>
            c.model === car.model ? { ...c, amount: c.amount + 1 } : c
        ));
    }

    const handleDecrease = (car) => {
        if (car.amount <= 1) {
            handleRemove(car);
        } else {
            setCart(cart.map(c =>
                c.model === car.model ? { ...c, amount: c.amount - 1 } : c
            ));
        }
    }

    const handlePurchase = () => {
        setCart([])
    }


    return(<>
        <CartContext.Provider value={{cart,handleAdd,handleRemove,handleIncrease,handleDecrease,handlePurchase}}>
            {children}
        </CartContext.Provider>
    </>)
}
