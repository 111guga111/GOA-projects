import { useCart } from "../Context/cartContext";
import { CarList } from "../data/carList";


function Listing() {
    const { cart, handleAdd, handleRemove, handleIncrease, handleDecrease } = useCart();
    const addedCars = JSON.parse(localStorage.getItem('addedCars')) || []
    const allCars = [...CarList,...addedCars]

    return (
        <ul>
            {allCars.map((car, index) => {
                const inCart = cart.find(c => c.model === car.model);

                return (
                    <li key={index}>
                        <img src={car.imageURL} alt={`${car.brand} ${car.model}`} width="300" />
                        <p>{car.brand} {car.model} - {car.year} - ${car.price}</p>

                        <div>
                            {inCart ? (
                                <>
                                    <button onClick={() => handleDecrease(inCart)}>-</button>
                                    <span>{inCart.amount}</span>
                                    <button onClick={() => handleIncrease(inCart)}>+</button>
                                    <button onClick={() => handleRemove(inCart)}>Remove</button>
                                </>
                            ) : (
                                <button onClick={() => handleAdd(car)}>Add To Cart</button>
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Listing;
