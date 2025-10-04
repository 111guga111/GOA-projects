import { useState } from 'react'
import Button from './Components/button'
import './index.css'


function App() {
  const [light, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!light)
  }

  return (
    <>
      <main className={light ? `light`:"dark"} style={{ display:`flex`,margin:`0 auto`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`, width:`1000px`, height:`500px`,}} >
        <h1>Hello World</h1>
        <Button func={toggleTheme } ></Button>
      </main>
    </>
  )
}

export default App
