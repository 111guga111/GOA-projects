import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CarList } from "../data/carList";


const FilteredCarsContext = createContext();

export const useFilteredCars = () => useContext(FilteredCarsContext);



export const FilteredCarsProvider = ({ children }) => {
    const [filteredCars, setfilteredCars] = useState(JSON.parse(localStorage.getItem('filteredCars')) || []);
    const addedCars = JSON.parse(localStorage.getItem('addedCars')) || []

    const allCars = [...CarList,...addedCars]

    useEffect(() => {
        localStorage.setItem('filteredCars', JSON.stringify(filteredCars));
    }, [filteredCars]);


    const navigate  = useNavigate();

    const handleSearch = (e, priceRange) => {
        (e?.preventDefault) && e.preventDefault();


        const form = e.target;
        const brand = form.brand?.value;
        const model = form.model?.value;
        const year = form.year?.value;
        
        const filteredList = allCars.filter((car) => {
            return(
                (!brand || car.brand === brand) && 
                (!model || car.model === model) && 
                (!year || car.year.toString() === year) && 
                (!priceRange || (car.price >= priceRange[0] && car.price <= priceRange[1]))

            );
        })

        setfilteredCars(filteredList);
        navigate('/filteredListing');
    }


    return (
        <FilteredCarsContext.Provider value={{filteredCars, handleSearch}}>
            {children}
        </FilteredCarsContext.Provider>
    )
}

