import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Nav from "../components/nav";
import Post from "../pages/Post";
import Home from "../pages/Home";


const App = () => {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </>
  )
}

export default App;