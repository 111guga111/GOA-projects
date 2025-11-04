import { useContext, useState } from "react";
import { deserts } from "../productsList";
import { cartContext } from "../Contexts/cartAddContext";



function List(){

    const {cart, HandleAdd} = useContext(cartContext);
    

    return(<>

        <ul>
            {deserts.map((item, i) => 
                
                <li key={i}>
                    {console.log(item.image.thumbnail)}
                    <img src={item.image.thumbnail} />
                    <button onClick={() => HandleAdd(item)}>Add to Cart</button>
                    <p>{item.category}</p>
                    <h1>{item.name}</h1>
                    <h1>${(item.price).toFixed(2)}</h1>
                            
                </li>)
            }
        </ul>
    
    </>)
}

export default List;