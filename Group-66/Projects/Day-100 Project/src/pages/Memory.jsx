import Card from '../components/Cards';
import { useEffect, useState } from "react";

function Memory({ status }) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [win, setWin] = useState(false);
  const { Email = '' } = status?.account || {};
  const records = JSON.parse(localStorage.getItem('Records')) || {};
  const emailRecord = records[Email] || {};
  const [score, setScore] = useState(emailRecord.memoryRecord || null);

  useEffect(() => {
    if (Email && emailRecord.memoryRecord !== undefined) {
      setScore(emailRecord.memoryRecord);
    }
  }, [Email]);


  const cardImages = [
    { src: `/img/cyan1.png`, matched: false },
    { src: `/img/cyan2.png`, matched: false },
    { src: `/img/green1.png`, matched: false },
    { src: `/img/green2.png`, matched: false },
    { src: `/img/red1.png`, matched: false },
    { src: `/img/red2.png`, matched: false },
  ];

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setWin(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((prev) => prev + 1);
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setWin(true);

      const oldScore = emailRecord.memoryRecord || Infinity;
      if (Email !== '' && turns < oldScore) {
        const updatedRecords = {
          ...records,
          [Email]: { ...emailRecord, memoryRecord: turns },
        };
        localStorage.setItem('Records', JSON.stringify(updatedRecords));
        setScore(turns);
      }
    }
  }, [cards, turns]);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5 p-1">Memory Game</h1>
      <div className='flex justify-center mt-5 items-center gap-5'>
        <h2 className="text-2xl text-center bg-gray-200 p-2 border-2 rounded-4xl">Turns: {turns}</h2>
        <h2 className="text-2xl text-center bg-gray-200 p-2 border-2 rounded-4xl">Record: {score}</h2>
      </div>
      <div className="flex justify-center items-center mt-2 mb-4 w-50 h-15">
        <button
          onClick={shuffleCards}
          className="blButtonStyle w-20 h-10"
        >
          Start
        </button>
      </div>

      {win && <h2 className="text-5xl text-center text-emerald-500 font-bold p-2">Winner!!!</h2>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full max-w-[600px] mx-auto mt-4">

        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
}

export default Memory;

