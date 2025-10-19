import { useEffect, useState } from "react"

function App() {
  const [name,setName] = useState(``)

  const handleSubmit = (e) => { 
    e.preventDefault();
    const value = e.target.elements.name.value;
    setName(value);
  };
  
  useEffect(()=>{
    alert(`Hello ${name}`)
  },[name])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name"/>
        <button type="submit">Submit</button>
      </form>
      
    </>
  )
}
//useEffect is a hook

//useEffect helps us run code based on component renders, we have control over witch component it picks to be depended on there render and also can make it so it runs once at start

export default App
