import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{

    const asy = async() => {
      const fet = await fetch(`https://fakestoreapi.com/products`)
      const res = await fet.json();
      setProducts(res)
    }

    asy();

  },[])
  
  

  return (
    <>
      
      <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul>

    </>
  )
}

export default App
