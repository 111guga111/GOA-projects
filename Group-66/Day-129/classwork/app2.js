const express = require('express');
const productList = require('./products.json');
const app = express();

app.use(express.json());



app.get('/products', (req, res) => {
    const product = productList.find( product => product.id === parseInt(req.query.id));
    product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
});



app.listen(3000, () => {
    console.log('Server running on port 3000');
});