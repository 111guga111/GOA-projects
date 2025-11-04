import { useContext } from "react";
import { colorContext } from "./colorProvider";


function Child2() {
    const { color, handleClick } = useContext(colorContext);

    return (
        <div style={{ backgroundColor: `rgb(${color})`, padding: '20px' }}>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
}

export default Child2;
