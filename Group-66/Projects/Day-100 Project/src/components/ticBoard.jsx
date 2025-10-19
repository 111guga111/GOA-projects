function Board({ HandleClick, board }) {
  const link = {
    X: '/img/X.png',
    O: '/img/O.png',
  };

  const lay = () => {
    const box = [];
    for (let i = 1; i < 10; i++) {
      box.push(
        <div
          key={i}
          onClick={() => HandleClick(i)}
          className="flex relative h-[120px] w-[120px] bg-gray-700 border-3 border-black justify-center items-center"
        >
          {board[i] && (
            <img
              alt=""
              src={link[board[i]]}
              className="max-w-[90%] max-h-[90%] object-contain absolute"
            />
          )}
        </div>
      );
    }
    return box;
  };

  return <div className="inline-grid grid-cols-3 grid-rows-3">{lay()}</div>;
}

export default Board;
