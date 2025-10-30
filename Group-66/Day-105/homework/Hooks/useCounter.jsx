import { useState } from "react"

function useCounter(){
    const [count,setCount] = useState(0)

    const increase = () =>{
        setCount(prev => prev + 1)
    }
    const decrease = () =>{
        setCount(prev => prev - 1)
    }

    const restart = ()  =>{
        setCount(0)
    }

    return [count, increase, decrease, restart]

};


export default useCounter;