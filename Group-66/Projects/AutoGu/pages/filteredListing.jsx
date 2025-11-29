
import { useCart } from "../Context/cartContext";
import { useFilteredCars } from "../Context/filteredCarsContext";

 
function FilteredListing() {
    const { filteredCars } = useFilteredCars();
    const { cart, handleAdd, handleRemove, handleIncrease, handleDecrease } = useCart();

    return (
        <div>
            {filteredCars.length === 0 ? (
                <p>No cars found matching your filter, try again.</p>
            ) : (
                <ul>
                    {filteredCars.map((car, index) => {
                        const inCart = cart.find(c => c.model === car.model);

                        return (
                            <li key={index}>
                                <img src={car.imageURL} alt={`${car.brand} ${car.model}`} width="200" height="150" />
                                <p>{car.brand} {car.model} - {car.year} - ${car.price}</p>
                                {car.seller? 
                                    <p>Seller: {car.seller} </p>
                                    :
                                    <p>Seller: AutoGu</p>
                                }
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
            )}
        </div>
    );
}

export default FilteredListing;