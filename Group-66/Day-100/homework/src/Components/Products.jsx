
function Products({products, increaseHandle, decreaseHandle}) {


  return (
    <>
        <ol>
          {
            products.length != 0 ? products.map(product => (
              <li key={product.name}>
                <p>Name: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <div style={{display:`flex`, gap:10,}}><button onClick={() => decreaseHandle(product)}>-</button><p>{product.quantity}</p><button onClick={() => increaseHandle(product, `1`)}>+</button></div>
              </li>
            )) : <p>Please add products</p>
          }
        </ol>
    </>
  );
}


export default Products;