const express = require('express');
const productList = require('./products.json');
const app = express();

app.use(express.json());

/*

    Parameter is part of the URL path that allows clients to choose specific resources.
    we use a parameter to get a product by its name.

    Query is extra information sent in the URL after a '?' character.
    we use a query to filter products by category.

*/


app.get('/products/:name', (req, res) => {
    const product = productList.find( product => product.name === req.params.name);
    product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
});



app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 