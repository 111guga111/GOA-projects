
import { useState } from "react";
import { CarList } from "../data/carList";
import { useFilteredCars } from "../Context/filteredCarsContext";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function FindCarSearch() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(''); 

    const { handleSearch } = useFilteredCars();
    const addedCars = JSON.parse(localStorage.getItem('addedCars')) || []

    const allCars = [...CarList, ...addedCars]

    const brands = [...new Set(allCars.map((car) => car.brand))];
    const pickedCarList = allCars.filter((car) => car.brand === brand)

    const models = pickedCarList.map((car) => car.model);

    const pickedcarmodels = pickedCarList.filter((car) => car.model === model)
    const years = [...new Set(pickedcarmodels.map((car) => car.year))];
    const [priceRange, setPriceRange] = useState([0, 100000]);


    const handleBrandChange = (e) => {
        setBrand(e.target.value);
        setModel('');
        setYear('');
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
        setYear('');
    };
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };


    return(<>

        <p>Find Your Dream Car!</p>

        <form onSubmit={(e) => {handleSearch(e, priceRange, CarList )}} className=" flex gap-10 border p-4 rounded-full w-250 justify-center items-center">

            <div className="flex justify-center items-center border-r pr-5 h-7">
                <select name="brand" value={brand} onChange={(e) => handleBrandChange(e)}>
                    <option value="">Select Brand</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>

            <div className="flex justify-center items-center border-r pr-5 h-7">
                <select name="model" value={model} onChange={(e) => handleModelChange(e)} >
                    <option value="">Select Model</option>
                    {models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
            </div>
            
            <div className="flex justify-center items-center border-r pr-5 h-7">
                <select name="year" value={year} onChange={(e) => handleYearChange(e)} >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-center items-center border-r pr-5 h-7">
                <div>
                    <label>Price : {priceRange[0]} - {priceRange[1]} $</label>
                    <Slider className="max-w-50" range min={0} max={100000} value={priceRange} onChange={(range) => setPriceRange(range)} />
                </div>
            </div>

            <button type="submit" className="bg-[#4664f6] transition-colors text-white rounded-full p-1 w-50 hover:cursor-pointer hover:bg-[#4e6cfb]" > Search</button>

        </form>
    </>) 

}


export default FindCarSearch;