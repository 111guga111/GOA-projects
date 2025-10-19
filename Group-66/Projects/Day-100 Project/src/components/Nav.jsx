import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Nav({ status }) {
  const [accountS, setAccount] = useState('Guest');
  const [image, setImage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (status) {
      const { state, account, admin } = status;

      if (state && account) {
        setAccount(account.name);
        setImage(account.Profile);
      } else {
        setAccount('Guest');
        setImage('');
      }

      setIsAdmin(admin || false);
    }
  }, [status]);

  return (
    <nav className="flex justify-center items-center bg-white mb-5">
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto px-4">
        
        <div className="flex gap-5 p-2">
          <Link
            to="/"
            className="text-lg text-black no-underline transition transform duration-300 hover:text-[#010316] hover:scale-120"
          >
            Home
          </Link>
          <Link
            to="/Arcade"
            className="text-lg text-black no-underline transition transform duration-300 hover:text-[#010316] hover:scale-120"
          >
            Arcade
          </Link>
          <Link
            to="/Library"
            className="text-lg text-black no-underline transition transform duration-300 hover:text-[#010316] hover:scale-120"
          >
            Library
          </Link>
        </div>

      
        <div className="flex items-center justify-end gap-5 p-2">
          <img
            src={image || '/img/profile.webp'}
            alt="Profile"
            onError={(e) => e.target.src = '/img/profile.webp'}
            className="w-15 h-10 rounded-full border-2 border-black object-cover"
          />
          <h3 className="text-black">{accountS}</h3>
          <Link
            to="/Profile"
            className="text-black no-underline transition transform duration-300 hover:text-[#010316] hover:scale-120"
          >
            Profile
          </Link>
          <Link
            to="/Account"
            className="text-white no-underline transition transform duration-300 hover:scale-120 hover:bg-gray-900 bg-black p-1  rounded-xl "
          >
            Account
          </Link>
          {isAdmin?
            <Link to='/Admin' className='text-red-900 font-bold hover:text-red-600 hover:scale-120 transition transform duration-300'>
              Admin
            </Link>
            :
            <p className='text-blue-900'>User</p>
          }
        </div>
      </div>
    </nav>
  );
}

export default Nav;
