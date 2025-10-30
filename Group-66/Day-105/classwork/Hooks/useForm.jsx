import { useState } from "react"

function useForm(){
    const [data,setData] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target

        setData({...data, [name]:value})
    }

    return [data, handleChange]

}

export default useForm