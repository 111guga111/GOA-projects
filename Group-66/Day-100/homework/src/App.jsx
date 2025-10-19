import { useState } from "react";
import Form from "./Components/Form";
import Products from "./Components/Products";

const App = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]:value }))
  };

  const handleAdd = (product) => {
    const entries = Object.entries(formState);
    const filteredArr = entries.filter(pair => pair[1] == "");

    if(filteredArr.length == 0) {
      if (products.find(prod => ((prod.name === formState.name) && (prod.description === formState.description))  )){
        increaseHandle(formState, formState.quantity);
      } else {
        
        setProducts(prev => [...prev, formState]);
        setMessages([]);
        setFormState({
          name: "",
          description: "",
          price: "",
          quantity: ""
        })
      }
      alert("Product added");
    }

    setMessages(filteredArr.map(pair => `Please fill out ${pair[0]} input!`));
  };

  const increaseHandle = (product, quantity) => {
    setProducts(products.map(p =>  p.name === product.name && p.description === product.description? { ...p, quantity: parseFloat(p.quantity) + parseFloat(quantity) } : p));

  }

  const decreaseHandle = (product) => {
    if(product.quantity > 0) {
      setProducts(products.map(p =>  p.name === product.name && p.description === product.description? { ...p, quantity: parseFloat(p.quantity) - 1 } : p));
    }
  }

  const handleReset = () => {
    setFormState({
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
    setMessages([]);
  };
  


  return (
    <main>
      <h1>Admin Panel</h1>

      <section>
        <h2>Add product</h2>
        <Form handleReset={handleReset} handleAdd={handleAdd} handleChange={handleChange} messages={messages} formState={formState}  />
      </section>

      <section>
        <h2>Added Products</h2>

        <Products products={products} increaseHandle={increaseHandle} decreaseHandle={decreaseHandle} />
        
      </section>
    </main>
  )
}

export default App;
