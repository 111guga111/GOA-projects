import { memo } from "react";
import { useState } from "react";


const Factorial = memo(() => {
    const [number, setNumber] = useState(0);
    const cal = (e) =>{
        e.preventDefault();
        const num = parseInt(e.target.number.value);
        let n = 1
        for (let i = 1; i <= num ; i++) {
            n = n * i;
        }
        setNumber(n);
    }

    return(<>
        <h1>{number}</h1>
        <form onSubmit={cal}>
            <input type="number" name="number" placeholder="Enter a number" />
        
            <button type="submit">submit</button>
        </form>
    </>)
})


export default Factorial;