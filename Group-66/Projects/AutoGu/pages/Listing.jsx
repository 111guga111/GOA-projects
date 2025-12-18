import { useState } from "react";
import { useAdmin } from "../Context/adminContext";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/cartContext";
import { CarList } from "../data/carList";

function Listing() {
    const { cart, handleAdd, handleRemove, handleIncrease, handleDecrease } = useCart();
    const { addedCars, handleRemoveAddedCar } = useAdmin();
    const allCars = [...CarList, ...addedCars];

    const {user} = useAuth();

    return (
        <ul className="flex flex-wrap justify-center gap-6 mt-5 min-h-screen">
        {allCars.map((car, index) => {
            const inCart = cart.find(c => c.model === car.model); 

            return (
            <li
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-4 flex flex-col items-center gap-4 w-72 shadow-md"
            >
                {user?.admin && car.seller && (
                    <button
                        className="bg-red-700 w-full h-1 hover:h-5 transition-all duration-500 cursor-pointer"
                        onClick={() => handleRemoveAddedCar(car)}
                    />
                )}
                <img 
                    src={car.imageURL}
                    alt={`${car.brand} ${car.model}`}
                    className="w-60 h-40 object-contain rounded-lg"
                />
                <div className="text-center">
                    <p className="text-white font-medium text-lg">
                        {car.brand} {car.model} - {car.year}
                    </p>
                    <p className="text-blue-400 font-semibold text-lg">${car.price}</p>
                    <p className="text-gray-300 text-sm">
                        Seller: {car.seller ? car.seller : "AutoGu"}
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
                    {inCart ? (
                        <>
                            <button
                                onClick={() => handleDecrease(inCart)}
                                className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                            >
                                -
                            </button>
                            <span className="text-white px-2">{inCart.amount}</span>
                            <button
                                onClick={() => handleIncrease(inCart)}
                                className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-200"
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleRemove(inCart)}
                                className="bg-red-700 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                            >
                                Remove
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => handleAdd(car)}
                            className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                        >
                            Add To Cart
                        </button>
                    )}
                </div>
            </li>
            );
        })}
        </ul>
    );
}

export default Listing;
