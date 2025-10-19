function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="relative w-full h-[120px] ">
        <div
            className={`relative w-full h-full rounded-md cursor-pointer transition-transform duration-500 `}
        >
        
        <img
            src={card.src}
            alt="Card Front"
            className={`absolute w-full h-full rounded-md border-2 border-black`}
            style={{transition:"all ease-in 0.2s ", transform: flipped? "rotateY(0deg)" : "rotateY(90deg)", transitionDelay: flipped ? '0.2s' : '0s',  }}
        />

        <img
            src="/img/back.png"
            alt="Card Back"
            onClick={handleClick}
            className={`absolute w-full h-full rounded-md border-2 border-black`}
            style={{transition:" all ease-in 0.2s ", transform: flipped? "rotateY(90deg)" : "rotateY(0deg)", transitionDelay: flipped ? '0s' : '0.2s',  }}
        />
      </div>
    </div>
  );
}

export default Card; 
