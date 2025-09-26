import Child from "./Child";

function Parent(props) {
  return <Child handle={props.handle} />
};

export default Parent;