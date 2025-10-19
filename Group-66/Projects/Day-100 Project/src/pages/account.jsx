import { Route, Routes, useLocation } from "react-router-dom";
import Rules from "../components/SignRules";
import SignUp from "../components/signUp";
import Login from "../components/LogIn";

function Account({ save, log, LogOut }) {
  const location = useLocation();
  const showMenu = location.pathname === '/Account';

  return (
    <>
      <main className="flex flex-col items-center ">

        <section className="flex items-center p-4 bg-gray-200 border-2 rounded-4xl h-130 mt-20">

          <div className="flex flex-col justify-center items-center">
            
            {showMenu && <SignUp save={save} />}

            <Routes>
              <Route path='/login' element={<Login log={log} />} />
            </Routes>

            <button onClick={LogOut} className='text-red-700 cursor-pointer hover:text-red-950 w-16'>Log Out</button>
          </div>

          <div className="bg-[url(/img/signUpDesign.jpg)] bg-cover w-90 h-100 rounded-b-full border-10">
            
          </div>
    
        </section>

        { showMenu && <Rules />}
      </main>
    </>
  );
}

export default Account;
