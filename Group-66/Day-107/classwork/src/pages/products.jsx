import { useContext, useState } from "react";
import { deserts } from "../productsList";
import List from "../components/ShopList";
import { cartContext } from "../Contexts/cartAddContext";
import CartList from "../components/CartList";


function Products(){
    const {count} = useContext(cartContext)
    

    return(<>
        <section>
            <h1>Deserts</h1>
            <List />
        </section>

        <section>
            <h1>Your Cart {count}</h1>
            <CartList />
        </section>

    </>)
}


export default Products;