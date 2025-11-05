import { createContext, useState } from "react";

export const cartContext = createContext()



function CartContext({children}){
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)

    const HandleAdd = (item) => {
        setCart([...cart,item])
    }

    return(
        <cartContext.Provider value={ {cart, count, HandleAdd} }>
            {children}
        </cartContext.Provider>
    )
    
}


export default CartContext;