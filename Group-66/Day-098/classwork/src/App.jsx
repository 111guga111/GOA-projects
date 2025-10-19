import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // Promocodes array
  const promocodes = [
    { code: 'DISCOUNT10', discount: 0.1 },
    { code: 'DISCOUNT20', discount: 0.2 },
    { code: 'DISCOUNT50', discount: 0.5 },
    { code: 'FREE', discount: 1 }
  ];

   useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
    
            console.log(data);
            setProducts(data);
          } catch(err) {
            console.log(err.message);
          }
        }
    
        fetchData();
      }, []);

  // Calulating total price when cart changes
  useEffect(() => {
    const sum = cart.reduce((prev, cur) => prev + cur.unit * cur.price, 0);
    setPrice(sum.toFixed(2));
  }, [cart]);

  const handleAddToCart = (prod) => {
    const isInCart = cart.find(item => item.id === prod.id);

    if(!isInCart) {
      const product = { ...prod, unit: 1 };
      setCart([...cart, product]);
    } else {
      handleIncreaseUnit(prod.id);
    }
  };

  const handleIncreaseUnit = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit + 1 } : item);

    setCart(updatedCart)
  };

  const handleDecreaseUnit = (id) => {
    const item = cart.find(item => item.id === id);

    if(item.unit === 1) {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      return;
    } 

    const updatedCart = cart.map(item => item.id === id ? { ...item, unit: item.unit - 1 } : item);

    setCart(updatedCart)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const promocode = e.target.promo.value;
    const isValude = promocodes.find(promo => promo.code === promocode);

    if(isValude) {
      const discountedPrice = price - (price * isValude.discount);
      setPrice(discountedPrice.toFixed(2));
      alert(`Promocode applied! You got ${isValude.discount * 100}% off!`);
    } else {
      alert('Invalid promocode');
    }
  }
  
  return (
    <main>  
      
      <ProductList products={products} handleAddToCart={handleAddToCart} />

      <Cart price={price} cart={cart} handleDecreaseUnit={handleDecreaseUnit} handleIncreaseUnit={handleIncreaseUnit}  />

      <Checkout handleSubmit={handleSubmit} cart={cart} price={price} />
      
      
    </main>
  )
}

export default App


//javascript closure is a function that remebers where variable was created which means function can use the variable outside the scope