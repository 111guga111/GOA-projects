import { useEffect, useState } from "react"

function App() {
  const [color, setColor] = useState(`white`)
  const [count, setCount] = useState(0)

  const change = (col) => {
    setColor(col)
  }
  
  const add = () =>{
    setCount(count => count + 1 )
  }

  useEffect(()=>{

    if (count === 7){
      alert("Lucky Number!!!")
    }

}, [count])


  return (

    <>
      <section style={{background:color, minHeight: `100vh`, minWidth:`100vw`, display:"flex", justifyContent:`center`, alignItems:`center`, flexDirection:`column`,}}>
        
        <h1>color:{color}</h1>
        <button onClick={() => change(`green`)}>Green</button>
        <button onClick={() => change(`blue`)}>Blue</button>
        <button onClick={() => change(`pink`)}>Pink</button>
        <button onClick={() => change(`red`)}>Red</button>

        <h1>number:{count} (lucky number: 7)</h1>
        <button onClick={add}>add number +1</button>
      </section>
    </>
  )
}

//cleanUp function is when we havt to get rid of extra functions that mess up our code

export default App
