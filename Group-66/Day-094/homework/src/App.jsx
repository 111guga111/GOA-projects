import { useState } from 'react'


function App() {
  const [user, setUser] = useState({Name:"name", Password:`123`})
  const [list, setList] = useState([])

  const reset = () => {
    setUser(user => ({...user, Name:`name`}))
  }
  const changeName = () =>  {
    setUser(user => ({...user, Name:`Guga`}))
  }

  const addItem = () => {
    setList(item => [...item, "Orange"])
  }
  return (
    <>
      <h1>my name is {user.Name}</h1>

      <button onClick={changeName}>Enter Name</button>
      <button onClick={reset}>Reset Name</button>


      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>

      <button onClick={addItem}>add Orange</button>
    </>
  )
}

export default App
