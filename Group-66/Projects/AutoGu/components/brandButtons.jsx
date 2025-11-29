import { useFilteredCars } from "../Context/filteredCarsContext";
import { CarList } from "../data/carList";




function BrandButtons() {   
    const brands = [...new Set(CarList.map((car) => car.brand))];
    const {handleSearch} = useFilteredCars();

    const handleClick = (brand) => {
        handleSearch({ target: { brand: { value: brand }}}, "", CarList );
    }

    return (<>
        <div className="flex gap-5">
            {brands.map((brand) => (
                <button key={brand} className="bg-gray-50 hover:cursor-pointer hover:bg-gray-200 p-2 border" onClick={ () =>( handleClick(brand) ) } >{brand}</button>
            ))}
        </div>
    </>);
}


export default BrandButtons;