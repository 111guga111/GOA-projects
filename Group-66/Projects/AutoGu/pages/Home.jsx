import { useEffect, useState } from "react";
import BrandButtons from "../components/brandButtons";
import FindCarSearch from "../components/FindCarSearch";

function Home() {
  const slides = [
    "../images/Cars/heroGarage.jpg",
    "../images/Cars/heroAudi.jpg", 
    "../images/Cars/heroMustang.jpg", 
    "../images/Cars/heroMercedes.jpg", 
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-200 bg-black ">
        <div>
          {slides.map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-white text-[20px]">Cars. Chosen for You.</h1>
          <h1 className="text-white text-5xl md:text-7xl font-bold [-webkit-text-stroke:3px_black]">
            AutoGu
          </h1>
          <FindCarSearch />
        </div>
      </div>
      
      <div className="-mt-23 relative flex flex-col items-center bg-gray-950 rounded-t-[100px] border-t border-gray-700 py-10 px-4 gap-6">
        <h1 className="text-white text-3xl font-semibold">Explore Our Brands</h1>
        <BrandButtons />
      </div>
    </div>
  );
}

export default Home;
