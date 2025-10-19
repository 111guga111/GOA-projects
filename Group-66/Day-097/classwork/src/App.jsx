import { useEffect, useState } from 'react'


function App() {
  
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const [Codes, setCode] = useState(['first',`second`,`123`])
  const [discount,setDiscount] = useState(1)

  


  useEffect(() =>{
    const asy = async() => {
      try{

        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()

        setProducts(data)
        return data

      }catch(error){
        console.log(error)
      }
      
    }
    asy()
  },[])

  useEffect(() =>{
    let money = cart.reduce((prev,cur) => prev + cur.unit * cur.price,0)
    money = money * discount
    setPrice(money.toFixed(2))
  }, [cart, discount])


  const promoCodes = (e) => {
  e.preventDefault()
  const form = e.target
  const code = form.PromoCodes.value.trim()

  if (Codes.includes(code)) {
    setDiscount(prev => prev*0.5 )
    setCode(Codes.filter(promo => promo !== code))  
  } else {
    alert("Invalid or already used code")
  }

  form.reset()
}

  const handleAddToCart = (prod) => {
    const isInCart = cart.find(item => item.id === prod.id);

    if(!isInCart) {
      const product = { ...prod, unit: 1 };
      setCart([...cart, product]);
    } else {
      handleIncrease(prod.id);
    }
  };

  const handleIncrease = (id) =>{

    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit + 1 } : item);

    setCart(updatedCart)
    
  }

  const handleDecrease = (id) => {
    const item = cart.find(item => item.id === id);

    if(item.unit === 1) {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      return;
    } 

    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit - 1 } : item);

    setCart(updatedCart)
  };

  return (
    <>  

      {products.map(product => (
        <li key={product.id}>
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
          <img src={product.image}  width={200}/>
          <button onClick={() => handleAddToCart(product)}>Add Cart</button>
        </li>))}

      <h1>Cart</h1>

      <h2>Amount: {cart.reduce((prev,cur) => prev + cur.unit,0)}</h2>
      <h2>Price: {price}</h2>
      <h2>Discount: { 100 - discount*100}%</h2>

      {cart.map(item => (
        <li key={item.id}>
          <h1>{item.title}</h1>
          <h3>{item.price}</h3>
          <img src={item.image}  width={200}/>
          <button onClick={()=>{handleDecrease(item.id)}}>-</button><span>{item.unit}</span><button onClick={()=>{handleIncrease(item.id)}}>+</button>
        </li>))}

      <form onSubmit={promoCodes}>
        <h1>Promo Codes</h1>
        <input type='text' name='PromoCodes' /> 
        <button type='submit'>Enter</button>
      </form>
      
    </>
  )
}

//we used useEffect to run this async function once at start and after getting list of items with useState we used map to render them


export default App
