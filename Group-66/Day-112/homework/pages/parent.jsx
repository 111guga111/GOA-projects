import { useState } from "react";
import Factorial from "../components/factorial";

function Parent() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
        <Factorial  />
      </>
    )
}
export default Parent;