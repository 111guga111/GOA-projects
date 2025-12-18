import { Link, useLocation } from "react-router";
import { useAuth } from "../Context/AuthContext";

function Nav() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-1 rounded-md transition-colors duration-200 ${
      location.pathname === path
        ? "bg-gray-700 text-white"
        : "text-gray-300 hover:bg-gray-600 hover:text-white"
    }`;

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-950">
      
      <div className="text-2xl font-bold text-white">AutoGu</div>

      
      <ul className="flex gap-4 items-center">
        <li>
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={linkClass("/listing")} to="/listing">
            Listing
          </Link>
        </li>
        <li>
          <Link className={linkClass("/cart")} to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className={linkClass("/about")} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={linkClass("/contact")} to="/contact">
            Contact
          </Link>
        </li>

        
        {user ? (
          <>
            <li>
              <button
                onClick={logout}
                className="px-3 py-1 rounded-md bg-red-700 text-white hover:bg-red-400 transition-colors duration-200 hover:cursor-pointer"
              >
                Logout
              </button>
            </li>
            <li>
              <Link className={linkClass("/profile")} to="/profile">
                Profile
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link className={linkClass("/signin")} to="/signin">
              Sign In
            </Link>
          </li>
        )}

        {user?.admin && (
          <li>
            <Link className={linkClass("/adminPanel")} to="/adminPanel">
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
