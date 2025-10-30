import { useState } from "react"


function useToggle(){
    const [toggle, setToggle] = useState(false)

    const Switch = () =>{
        setToggle(!toggle)
    }

    return [toggle, Switch];
}



export default useToggle