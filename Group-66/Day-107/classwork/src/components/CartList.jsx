import { useContext } from "react"
import { cartContext } from "../Contexts/cartAddContext"


function CartList(){
    
    const {cart, count} = useContext(cartContext)

    return(
        <ul>
            {count == 0 ? <li key={'first'}>Your added items will appear here</li>: '' }
            {cart.map((item, i) =>

                <li key={i}>
                    {console.log(item.image.thumbnail)}
                    <img src={item.image.thumbnail} />
                    <button onClick={() => HandleAdd(item)}>Add to Cart</button>
                    <p>{item.category}</p>
                    <h1>{item.name}</h1>
                    <h1>${(item.price).toFixed(2)}</h1>
                            
                </li>

                )
            }
        </ul>
    )
}

export default CartList;

//https://cardboardpl.github.io/Frontend-Mentor-Product-list-with-cart/