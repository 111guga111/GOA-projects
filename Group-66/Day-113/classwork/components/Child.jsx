import { memo } from "react";

const Child = memo(({addToList}) => {
  return (<>
        <ul>
            {addToList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
  </>);
})

export default Child;