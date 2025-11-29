const fs = require('fs');


const CarList = [
  { id: 1, brand: "Audi",      model: "A4",        year: 2023, price: 41000, imageURL: "/images/Cars/audi-a4.jpg" },
  { id: 2, brand: "Audi",      model: "Q5",        year: 2022, price: 52000, imageURL: "/images/Cars/audi-q5.jpg" },

  { id: 3, brand: "BMW",       model: "3 Series",  year: 2023, price: 47000, imageURL: "/images/Cars/bmw-3series.jpg" },
  { id: 4, brand: "BMW",       model: "X5",        year: 2021, price: 58000, imageURL: "/images/Cars/bmw-x5.jpg" },

  { id: 5, brand: "Chevrolet", model: "Camaro",    year: 2022, price: 51000, imageURL: "/images/Cars/chevrolet-camaro.jpg" },
  { id: 6, brand: "Chevrolet", model: "Malibu",    year: 2023, price: 26000, imageURL: "/images/Cars/chevrolet-malibu.jpg" },

  { id: 7, brand: "Ford",      model: "Mustang",   year: 2023, price: 56000, imageURL: "/images/Cars/ford-mustang.jpg" },
  { id: 8, brand: "Ford",      model: "Focus",     year: 2022, price: 20000, imageURL: "/images/Cars/ford-focus.jpg" },

  { id: 9, brand: "Honda",     model: "Civic",     year: 2023, price: 23000, imageURL: "/images/Cars/honda-civic.jpg" },
  { id: 10, brand: "Honda",    model: "Accord",    year: 2022, price: 27000, imageURL: "/images/Cars/honda-accord.jpg" },

  { id: 11, brand: "Hyundai",  model: "Elantra",   year: 2023, price: 22000, imageURL: "/images/Cars/hyundai-elantra.jpg" },
  { id: 12, brand: "Hyundai",  model: "Tucson",    year: 2022, price: 30000, imageURL: "/images/Cars/hyundai-tucson.jpg" },

  { id: 13, brand: "Kia",      model: "Stinger",   year: 2021, price: 39000, imageURL: "/images/Cars/kia-stinger.jpg" },
  { id: 14, brand: "Kia",      model: "Sportage",  year: 2023, price: 29000, imageURL: "/images/Cars/kia-sportage.jpg" },

  { id: 15, brand: "Mercedes", model: "C-Class",   year: 2022, price: 46000, imageURL: "/images/Cars/mercedes-cclass.jpg" },
  { id: 16, brand: "Mercedes", model: "GLE",       year: 2023, price: 72000, imageURL: "/images/Cars/mercedes-gle.jpg" },

  { id: 17, brand: "Nissan",   model: "Altima",    year: 2021, price: 24000, imageURL: "/images/Cars/nissan-altima.jpg" },
  { id: 18, brand: "Nissan",   model: "Rogue",     year: 2023, price: 29000, imageURL: "/images/Cars/nissan-rogue.jpg" },

  { id: 19, brand: "Toyota",   model: "Corolla",   year: 2022, price: 21000, imageURL: "/images/Cars/toyota-corolla.jpg" },
  { id: 20, brand: "Toyota",   model: "RAV4",      year: 2023, price: 32000, imageURL: "/images/Cars/toyota-rav4.jpg" },
];


const data = fs.readFileSync(__filename, "utf8");
console.log(data);