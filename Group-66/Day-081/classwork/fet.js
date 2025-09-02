
const url = "https://fakestoreapi.com/products";

const product = {
  title: "New Fancy Product",  
  price: 29.99,                
};

fetch(url, {
  method: "POST", // method post helps us add new items

  headers: {
    "Content-Type": "application/json" // we specify that this is json format
  },

  body: JSON.stringify(product) // we send into body
})

.then(response => response.json())

.then(data => {
  console.log(data); // we print data (data that we fetched that was turned into json)
})

.catch(error => {
  console.error("Error:", error); // catch returns errors if theres any
});
