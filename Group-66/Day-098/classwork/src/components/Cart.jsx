import { useEffect, useState } from "react";

function Cart({ handleIncreaseUnit, handleDecreaseUnit, cart, price}){
    

    return (<>
    <section>
        <h2>Cart</h2>
        <p>Products: {cart.reduce((prev, cur) => prev + cur.unit, 0)}</p>
        <p>Price: {price}</p>
        <ul>
          {
            cart.map(item => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.image} width={100} />
                <div>
                  <button onClick={() => handleDecreaseUnit(item.id)}>-</button>
                  <span>{item.unit}</span>
                  <button onClick={() => handleIncreaseUnit(item.id)}>+</button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>

      
        </>)


}

export default Cart