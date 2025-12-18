import { useEffect, useState } from "react";
import { useCart } from "../Context/cartContext";
import { useAuth } from "../Context/AuthContext";

function Cart() {
  const { cart, handleIncrease, handleDecrease, handleRemove, handlePurchase } = useCart();
  const { user } = useAuth();
  const [popUp, setPopUp] = useState(false);
  const [cost, setCost] = useState(0);

  const handleConfirm = () => {
    handlePurchase();
    setPopUp(true);
  };
  const handleDone = () => {
    setPopUp(false);
  };

  useEffect(() => {
    setCost(cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col items-center gap-6 mt-5 min-h-screen">
      {popUp && (
        <>
          <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4 w-96 text-center shadow-lg">
              <p className="text-black text-lg font-semibold">
                Thank You For The Purchase!
              </p>
              <button
                onClick={handleDone}
                className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                Done
              </button>
            </div>
          </div>
        </> 
      )}

      {cart.length === 0 ? (
        <p className="text-blue-400 text-3xl ">Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-6 w-full max-w-4xl">
          {cart.map((car, index) => (
            <li
              key={index}
              className="bg-gray-900 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 border border-gray-700 shadow-md"
            >
              <img
                src={car.imageURL}
                alt={`${car.brand} ${car.model}`}
                className="w-48 h-32 object-contain rounded-lg"
              />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-white font-medium text-lg">
                  {car.brand} {car.model} - {car.year}
                </p>
                <p className="text-blue-400 font-semibold text-lg">${car.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleDecrease(car)}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="text-white px-2">{car.amount}</span>
                  <button
                    onClick={() => handleIncrease(car)}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(car)}
                    className="bg-red-700 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length !== 0 && (
        <div className="flex flex-col items-center gap-4 mt-6 mb-10">
          <p className="text-blue-400 text-xl font-semibold">Total Price: ${cost}</p>
          {user && 
            <button
                onClick={handleConfirm}
                className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
                Confirm Purchase
            </button>
          }
        </div>
      )}
    </div>
  );
}

export default Cart;
