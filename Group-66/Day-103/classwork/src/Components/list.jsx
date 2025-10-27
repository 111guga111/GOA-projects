

function List({products,handleDelete}) {
    return (
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </li>
                ))}
            </ul>
    )
}

export default List;