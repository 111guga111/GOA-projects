import { useState } from "react";



const App = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    
  }
  

  return (
    <form>
      <input onChange={handleChange} value={input} type="text" />
      <button>Submit</button>
    </form>
  )
}

export default App