import { useContext, useState } from "react";
import List from "../components/ShopList";
import { cartContext } from "../Contexts/cartAddContext";
import CartList from "../components/CartList";
import ConfirmContext from "../Contexts/confirmContext";


function Products(){
    const {count} = useContext(cartContext)
    

    return(<>
        <main className="flex justify-center mt-20 gap-10">
        
            <section>
                <h1 className="pb-5 text-5xl font-bold ">Desserts</h1>
                <List />
            </section>

            <section>
                <h1 className=" pt-5 text-[25px] font-bold text-[#bf3f0b] ">Your Cart ({count})</h1>
                
                <CartList />
                
            </section>

        </main>
    </>)
}


export default Products; 