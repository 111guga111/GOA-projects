import { useState } from "react";

function toggleText(){
    const [toggleText, setToggleText] = useState(false)

    const toggleTextFunc = () =>{
        setToggleText(prev => !prev)
    }

    return [toggleText, toggleTextFunc]
};


export default toggleText;