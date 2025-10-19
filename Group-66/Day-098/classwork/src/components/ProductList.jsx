import { useEffect, useState } from "react";

function ProductList({products, handleAddToCart}){


   
    return (<>
    <h1>My market</h1>
    <section>
        <h2>Product List</h2>
        <ul>
          {
            products.map(product => (
                <li key={product.id}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.category}</p>
                  <img src={product.image} width={100} />
                  <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                </li>
              )
            )
          }
        </ul> 
      </section>
      </>)
}


export default ProductList