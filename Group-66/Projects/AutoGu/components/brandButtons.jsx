import { useFilteredCars } from "../Context/filteredCarsContext";
import { CarList } from "../data/carList";

function BrandButtons() {
  const brands = [...new Set(CarList.map((car) => car.brand))];
  const { handleSearch } = useFilteredCars();

  const handleClick = (brand) => {
    handleSearch({ target: { brand: { value: brand } } }, "", CarList);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => handleClick(brand)}
          className="
            flex flex-col items-center gap-3
            bg-gray-900 border border-gray-700
            px-6 py-5 rounded-2xl
            hover:bg-blue-700 hover:border-blue-500
            hover:scale-110 transition-all duration-200
            text-white text-lg font-semibold
          "
        >
          <img
            src={`../images/Logos/${brand}.svg`}
            alt={brand}
            className="w-20 h-10 object-contain"
          />
          <span>{brand}</span>
        </button>
      ))}
    </div>
  );
}

export default BrandButtons;
