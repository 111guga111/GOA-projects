import { createContext, useState } from "react";
import PopUp from "../components/popUp";

export const confirmContext = createContext();

function ConfirmContext({children}){
    const [pop,setPop] = useState(false)

    const popUp = ()=>{
        setPop(!pop)
    }


    return (
        <confirmContext.Provider value={{pop, popUp}}>
            {children}
        </confirmContext.Provider>
    )
} 

export default ConfirmContext;   