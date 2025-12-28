const express = require('express');
const app = express();
const products = require('./products.json')

app.use(express.json());

app.get('/products', (req, res) => {
    const { name } = req.query
    const list = products.filter(product => product.name === name);
    name? res.json(list) : res.json(products);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
