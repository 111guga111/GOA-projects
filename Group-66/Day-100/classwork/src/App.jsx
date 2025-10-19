import { useState } from "react";
import Form from "./Components/form";
import List from "./Components/list";

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

  const handleAdd = () => {
    const entries = Object.entries(formState);
    const filteredArr = entries.filter(pair => pair[1] == "");

    if(filteredArr.length == 0) {
      setProducts(prev => [...prev, formState]);
      setMessages([]);
      alert("Product added");
      return;
    }

    setMessages(filteredArr.map(pair => `Please fill out ${pair[0]} input!`));
  };

  const handleReset = () => {
    setFormState({
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
    setMessages([]);
  };
  
  const handleDelete = (index) => {
    const filteredProducts = products.filter((product, i) => i !== index);
    setProducts(filteredProducts);
  }


  return (
    <main>
        <section>
            <Form handleChange={handleChange} handleAdd={handleAdd} formState={formState} handleReset={handleReset} messages={messages} />
        </section>
        <section>
            <List products={products} handleDelete={handleDelete} />
        </section>
    </main>
  )
}

export default App;