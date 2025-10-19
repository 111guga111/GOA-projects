import { useState } from 'react'


function App() {
  const [inputName, setinputName] = useState("");
  const [inputLastname, setinputLastname] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleInput = (e) => {
    e.target.name === "lastname" ?  setinputLastname(e.target.value) :  setinputName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Name: {inputName} Lastname: {inputLastname}</h1>
        <input type="text" name="name" onChange={handleInput} value={inputName} disabled={disabled} />
        <input type="text" name="lastname" onChange={handleInput} value={inputLastname} disabled={disabled} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
