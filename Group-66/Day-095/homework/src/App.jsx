import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{

    const asy = async() => {
      try{
        const fet = await fetch(`https://fakestoreapi.com/products`)
        const res = await fet.json();
        setProducts(res)
      }catch(err){
        console.log(err)
      }
      
    }

    asy();

  },[])
  
  

  return (
    <>
      
      <ul style={{ listStyle:"none",display:"flex", flexDirection:"column", gap:20, width:400}}>
        {products.map(product => 

        <li key={product.id} style={{backgroundColor:'lightgrey', padding:20, border:"solid", textAlign:"center"}}>

          <h1>{product.title}</h1> 
          <p>{product.description}</p>
          <img src= {product.image} width={200} backgo />

        </li>)}
      
      </ul>

    </>
  )
}

export default App
