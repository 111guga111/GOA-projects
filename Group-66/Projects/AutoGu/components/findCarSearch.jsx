import { useState } from "react";
import { CarList } from "../data/carList";
import { useFilteredCars } from "../Context/filteredCarsContext";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function FindCarSearch() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const { handleSearch } = useFilteredCars();
  const addedCars = JSON.parse(localStorage.getItem("addedCars")) || [];
  const allCars = [...CarList, ...addedCars];

  const brands = [...new Set(allCars.map((car) => car.brand))];
  const pickedCarList = allCars.filter((car) => car.brand === brand);
  const models = pickedCarList.map((car) => car.model);
  const pickedCarModels = pickedCarList.filter((car) => car.model === model);
  const years = [...new Set(pickedCarModels.map((car) => car.year))];

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel("");
    setYear("");
  };
  const handleModelChange = (e) => {
    setModel(e.target.value);
    setYear("");
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-5">
      <p className="text-white text-2xl font-semibold">
        Find Your Dream Car!
      </p>

      <form
        onSubmit={(e) => handleSearch(e, priceRange, CarList)}
        className="flex flex-wrap gap-4 border border-gray-700 rounded-full bg-gray-950 p-4 justify-center items-center "
      >
        
        <div className="flex items-center border-r border-gray-700 pr-4">
          <select
            name="brand"
            value={brand}
            onChange={handleBrandChange}
            className="bg-gray-800 text-white px-2 py-1 rounded-md focus:outline-none"
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

       
        <div className="flex items-center border-r border-gray-700 pr-4">
          <select
            name="model"
            value={model}
            onChange={handleModelChange}
            className="bg-gray-800 text-white px-2 py-1 rounded-md focus:outline-none"
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        
        <div className="flex items-center border-r border-gray-700 pr-4">
          <select
            name="year"
            value={year}
            onChange={handleYearChange}
            className="bg-gray-800 text-white px-2 py-1 rounded-md focus:outline-none"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        
        <div className="flex flex-col items-center pr-4 border-r border-gray-700">
          <label className="text-white mb-1">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div className="w-48">
            <Slider
              range
              min={0}
              max={100000}
              value={priceRange}
              onChange={(range) => setPriceRange(range)}
              trackStyle={[{ backgroundColor: "#4664f6" }]}
              handleStyle={[
                { borderColor: "#4664f6" },
                { borderColor: "#4664f6" },
              ]}
            />
          </div>
        </div>

        
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default FindCarSearch;
