import { useContext } from "react";
import { childContext } from "./App";

function Child(){
    const value = useContext(childContext)

    return <h1>{value}</h1>
}

export default Child;