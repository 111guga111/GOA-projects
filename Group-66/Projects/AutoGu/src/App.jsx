import { Route, Routes } from "react-router"
import Nav from "../components/nav"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import SignIn from "../pages/SignIn"
import LogIn from "../pages/LogIn"
import Profile from "../pages/Profile"
import FilteredListing from "../pages/filteredListing"
import Listing from "../pages/Listing"
import AdminPanel from "../pages/AdminPanel"
import Cart from "../pages/Cart"
import Footer from "../components/footer"


function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/filteredListing" element={<FilteredListing />} />
        <Route path="/adminPanel" element={<AdminPanel />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
