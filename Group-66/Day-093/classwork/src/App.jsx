import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count ++)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>+1</button>
    </>
  )
}

export default App
