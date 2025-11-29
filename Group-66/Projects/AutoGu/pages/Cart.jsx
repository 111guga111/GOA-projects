import { useEffect, useState } from "react";
import { useCart } from "../Context/cartContext";

function Cart() {
    const { cart, handleIncrease, handleDecrease, handleRemove, handlePurchase } = useCart();
    const [popUp, setPopUp] = useState(false)
    const [cost, setCost] = useState(0)

    const handleConfirm = () =>{
        handlePurchase()
        setPopUp(true)
    }
    const handleDone = () =>{
        setPopUp(false)
    }

    useEffect(() => {
        setCost(
            cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0)
        );
    }, [cart]);

    return (
        <>
            {popUp&&
                <>
                    <div className="w-full h-full flex absolute bg-black opacity-20 justify-center items-center "></div>
                    <div className="flex items-center justify-center absolute w-full h-full ">
                        <div className="bg-white flex-col w-100 h-20 rounded-2xl text-center">
                            <p className="text-black">Thank You For The Purchase!</p>
                            <button onClick={handleDone} className="cursor-pointer">Done</button>
                        </div>
                    </div>
                </>
            }
            <ul>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((car, index) => (
                        <li key={index}>
                            <img src={car.imageURL} alt={`${car.brand} ${car.model}`} width="200" height="150" />
                            <p>{car.brand} {car.model} - {car.year} - ${car.price}</p>
                            <div>
                                <button onClick={() => handleDecrease(car)}>-</button>
                                <span>{car.amount}</span>
                                <button onClick={() => handleIncrease(car)}>+</button>
                                <button onClick={() => handleRemove(car)}>Remove</button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            

            {cart.length != 0 &&
                <>
                    <p>{cost}</p>
                    <button onClick={handleConfirm} className="cursor-pointer">Confirm Purchase</button>
                </>
            }
            
        </>
    );
}

export default Cart;
