import { useEffect, useState } from 'react';
import Board from '../components/ticBoard';

function TicTac() {
  const [side, setSide] = useState(true);
  const [board, setBoard] = useState({});
  const [winner, setWinner] = useState(null);
  const [over, setOver] = useState(false);
  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);

  const combos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const reset = () => {
    setSide(true);
    setBoard({});
    setWinner(null);
    setOver(false);
  };

  const resetScore = () => {
    reset();
    setXScore(0);
    setOScore(0);
  };

  useEffect(() => {
    for (let combo of combos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        board[a] === 'X' ? setXScore((prev) => prev + 1) : setOScore((prev) => prev + 1);
        break;
      }
    }
  }, [board]);

  useEffect(() => {
    if (!winner && Object.values(board).length === 9) {
      setOver(true);
    }
  }, [board]);

  const HandleClick = (i) => {
    if (!board[i] && !winner) {
      setBoard((prev) => ({ ...prev, [i]: side ? 'X' : 'O' }));
      setSide((prev) => !prev);
    }
  };

  return (
    <>
      <h1 className="text-[50px] flex justify-center items-center mt-5">TicTac Toe</h1>

      <div className="flex justify-center gap-2.5 p-2.5">
        <button onClick={resetScore} className="w-[100px] h-[30px] blButtonStyle">
          Reset Score
        </button>
        <button onClick={reset} className="w-[100px] h-[30px] blButtonStyle">
          New Match
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-800 border-4 border-black mb-1 p-3 sm:p-5 w-full max-w-[500px] gap-3 sm:gap-5 mx-auto">

        <div className="flex justify-center items-center border-4 border-black bg-gray-400 p-2.5 gap-2.5">
          <img src="/img/X.png" alt="X" className="w-10 h-8" />
          <h1 className="text-xl">{XScore}</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-2.5">
          {!winner && !over && (
            <h2
              className={`rounded-[15px] border-2 p-2.5 text-xl flex justify-center items-center ${
                side ? 'bg-red-500' : 'bg-blue-500'
              }`}
            >
              Turn: {side ? 'X' : 'O'}
            </h2>
          )}
          <h1 className="text-2xl text-green-600">{winner ? `WINNER!!! ${winner}!!!` : over ? 'Draw!' : ''}</h1>
        </div>

        <div className="flex justify-center items-center border-4 border-black bg-gray-400 p-2.5 gap-2.5">
          <img src="/img/O.png" alt="O" className="w-10 h-8" />
          <h1 className="text-xl">{OScore}</h1>
        </div>
      </div>

      <Board HandleClick={HandleClick} board={board} />
    </>
  );
}

export default TicTac;
