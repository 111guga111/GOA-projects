import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-30">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} AutoGu. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
                Your trusted partner in finding the perfect car.
            </p>
        </div>


        <div className="flex flex-col md:flex-row gap-4">
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Contact
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                About
            </Link>
        </div>

        
        <div className="flex gap-4">
            <a href="https://www.facebook.com/guga.topchishvili" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" target="_blank">
                <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/guga1449/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" target="_blank">
                <FaInstagram size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
