import { createContext, useState } from "react";
export const colorContext = createContext()


export function ColorProvider({children}){
    const [color, setColor] = useState('')

    const randomColor = () => {
        return `${Math.floor(Math.random() * 255) } ${Math.floor(Math.random() * 255) } ${Math.floor(Math.random() * 255) }`
    }

    const handleClick = () => {
        setColor(randomColor())
    }


    return(
        <colorContext.Provider value={{ color, handleClick }}>
            {children}
        </colorContext.Provider>
    )

}



