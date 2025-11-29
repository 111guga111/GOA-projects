import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
    const [toDoList, setToDoList] = useState([])


    const addToDo = (e) => {
        e.preventDefault();
        const text = e.target.text.value;

        setToDoList([...toDoList, text ]);

        e.target.reset();

    }

    return (<>
        <form onSubmit={addToDo}>
            <input type="text" name="text" placeholder="text" />
            <button type="submit"> add!</button>
        </form>
        <Child addToList={toDoList} />
    </>);
}

export default Parent;