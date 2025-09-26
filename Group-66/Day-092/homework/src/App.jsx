import Parent from "./Parent"
import Headers from "./Header"

const handleClick = () => {
  console.log("Button Clicked")
}
const LoggedIn = true;

function App() {
  return (
    <>
      <Headers loggedIn={LoggedIn}/>
      <Parent handle={handleClick}/>
    </>
  )
}

export default App;
