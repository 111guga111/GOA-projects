import { Link, Route, Routes, useLocation } from "react-router-dom";
import TicTac from './TicTac';
import Memory from './Memory';
import ReflexTester from "./ReflexTester";

function Arcade({ status }) {
  const location = useLocation();
  const showMenu = location.pathname === '/Arcade';

  return (
    <main className="flex flex-col items-center w-full px-4">

      {showMenu && (<>
        <section className="flex w-screen bg-[url(/img/mainBack.jpg)] bg-cover bg-center h-50 overflow-hidden">
          <div className="flex flex-col w-6xl gap-3 pl-20 mb-10 bg-gray-300 p-5 rounded-tr-full h-full">

            <h1 className="text-6xl p-2">Have Fun! </h1>

            <p className="text-2xl"> 
              Challenge yourself,
              sharpen your mind, 
              and have a blast! 
              Our games are designed to test your memory, 
              reflexes, and strategy—all while keeping the fun alive.
            </p>
            
          </div>
        </section>
        <div className="flex flex-wrap justify-center items-center text-xl gap-5">


          <div className="flex flex-col justify-center items-center text-center gap-5 p-5">
            <h1>Memory Game</h1>
            <Link
              to="/Arcade/Memory"
              className="text-black font-extrabold transition-all hover:text-[#010316] hover:scale-110 border-2 p-5 rounded-2xl bg-[url(/img/memory.jpg)] bg-cover bg-center w-70 h-100"
            ></Link>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-5 p-5">
            <h1>TicTac Toe</h1>
            <Link
              to="/Arcade/TicTac"
              className="text-black font-extrabold transition-all hover:text-[#010316] hover:scale-110 border-2 p-5 rounded-2xl bg-[url(/img/tictac.jpg)] bg-cover bg-center w-70 h-100"
            ></Link>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-5 p-5">
            <h1>Reflex Tester</h1>
            <Link
              to="/Arcade/Reflex"
              className="text-black font-extrabold transition-all hover:text-[#010316] hover:scale-110 border-2 p-5 rounded-2xl bg-[url(/img/trafficlight.jpg)] bg-cover bg-center w-70 h-100"
            ></Link>
          </div>

        </div>
      </>)}

      


      <Routes>
        <Route path='Memory' element={<Memory status={status} />} />
        <Route path='TicTac' element={<TicTac />} />
        <Route path='Reflex' element={<ReflexTester status={status} />} />
      </Routes>
    </main>
  );
}

export default Arcade;
