import { useState } from 'react'
import Products from './Products'


function App() {
  const [badCount, badSetCount] = useState(0)
  const [goodCount, goodSetCount] = useState(0)

  const badCounter = () => {
    badSetCount(badCount + 1)
  }

  const goodCounter = () => {
    goodSetCount(good => good + 1)
  } 


  return (
    <>
      <h1>Bad Way: {badCount}</h1>
      <button onClick={badCounter}>i am bad</button>
      <h1>Good Way: {goodCount}</h1>
      <button onClick={goodCounter}>i am good</button>

      <Products/>
    </>
  )
}

// bad way works async way, witch means it doesnt wait till its done before next one runs and uses currect value, therefore it will skip some clicks if we click it fast enough

// good way is using functions, so its based on last corrected

export default App
