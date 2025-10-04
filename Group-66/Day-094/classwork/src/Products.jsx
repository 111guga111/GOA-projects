import { useState } from 'react'


function Products(){
    const [products, setProduct] = useState([`product1`,`product2`])

    function add() {
        const product = `product ${products.length + 1}`

        setProduct([...products, product])

    }
    
    
    return(
        <>
            <ul>
                {products.map(product => <li key={product}>{product}</li>)}
            </ul>

            <button onClick={add} >add product</button>   
        </>
    )
    
}



export default Products;