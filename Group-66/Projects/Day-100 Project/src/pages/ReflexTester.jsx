import { useEffect, useRef, useState } from 'react';

function ReflexTester({ status }) {
  const [color, setColor] = useState(false);
  const [allowedToClick, setAllowedToClick] = useState(false);
  const [began, setBegan] = useState(false);
  const [res, setRes] = useState(null);

  const { Email = '' } = status?.account || {};
  const records = JSON.parse(localStorage.getItem('Records')) || {};
  const emailRecord = records[Email] || {};
  const [score, setScore] = useState(emailRecord.reflexRecord || null);

  const timeoutRef = useRef(null);
  const greenTimeRef = useRef(null);

  useEffect(()=>{
    if (Email && emailRecord.reflexRecord !== undefined) {
      setScore(emailRecord.reflexRecord);
    }

  },[Email])

  const startGame = () => {
    setColor(false);
    setAllowedToClick(true);
    setBegan(true);
    setRes(null);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const delay = Math.random() * 2000 + 1000;

    timeoutRef.current = setTimeout(() => {
      setColor(true);
      greenTimeRef.current = Date.now();
      timeoutRef.current = null;
    }, delay);
  };

  const endGame = () => {
    setColor(false);
    setAllowedToClick(false);
    setBegan(false);
    setRes(null);
    clearTimeout(timeoutRef.current);
  };

  const handleClick = () => {
    if (allowedToClick) {
      setBegan(false);
      setAllowedToClick(false);
      if (color) {
        setRes(((Date.now() - greenTimeRef.current) / 1000).toFixed(3));
      } else {
        clearTimeout(timeoutRef.current);
        greenTimeRef.current = null;
        alert('Too early! Game stopped.');
      }
    }
  };

  useEffect(() => {
    const oldScore = score || Infinity;
    if (res && Email !== '' && res < oldScore) {
      const updatedRecords = { ...records, [Email]: { ...emailRecord, reflexRecord: res } };
      localStorage.setItem('Records', JSON.stringify(updatedRecords));
      setScore(res);
    }
  }, [res]);

  return (
    <main className='flex flex-col items-center mt-10'>
      <h1 className="text-3xl font-bold mb-2 p-1">Reflex Tester</h1>
      <h2 className="text-xl mb-4">Record: {score}</h2>

      <div className="flex gap-2 mb-4 p-1">
        <button
          className="w-20 h-10 blButtonStyle"
          onClick={startGame}
        >
          Start
        </button>
        <button
          className="w-20 h-10 blButtonStyle"
          onClick={endGame}
        >
          End
        </button>
      </div>
      <section className='bg-gray-900 h-100 p-5 flex flex-col items-center'>

        <div
          className={`flex justify-center items-center w-[600px] h-[200px] cursor-pointer transition-all 
            ${ color ? 'bg-green-600' : 'bg-red-600' } 
            ${ began ? 'border-4 border-black' : 'border-2 border-black' }
          `}
          onClick={handleClick}
        >
          <h1 className="text-4xl font-bold p-1">{res}</h1>
        </div>
        
        <div className={` w-20 h-20 rounded-full mt-10 border-10 border-t-15 ${began? (color? `bg-green-600`: `bg-yellow-300`): `bg-red-700` }`}></div>
      </section>
    </main>
  );
}

export default ReflexTester;
