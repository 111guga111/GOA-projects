import Register from "./Pages/register"
import AuthProvider from "./Provider/authProvider"


function App() {
  

  return (
    <>
      <AuthProvider>
        <Register />
      </AuthProvider>
    </>
  )
}

export default App
