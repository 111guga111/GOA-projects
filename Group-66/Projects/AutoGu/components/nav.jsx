import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext";



function Nav(){
    const {user, logout} = useAuth();

    return(<>
        <nav className="flex items-center justify-between p-4">

            <div className=""><p>AutoGu</p></div>

            <ul className="flex gap-4 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listing">Listing</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                {user ? 
                    <>
                        <li>
                            <button 
                                className="hover:cursor-pointer"
                                onClick={logout}>
                                Logout
                            </button>
                        </li> 
                        <li><Link to="/profile"> Profile </ Link></li>
                    </>
                    : 
                    <>
                        <li><Link to="/signin"> Sign In </ Link> </li> 
                    </>
                }
                {user?.admin &&
                    <li><Link to="/adminPanel">Admin</Link></li>
                }

            </ul>
            
            
        </nav>
    </>)
}


export default Nav;