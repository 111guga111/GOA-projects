import { useState } from "react"

function useCheckbox(){
    const [checkboxValue, setCheckboxValue] = useState(false)

    const handleChange = () =>{
        setCheckboxValue(prev => !prev)
    }

    return [checkboxValue, handleChange]
};

export default useCheckbox;