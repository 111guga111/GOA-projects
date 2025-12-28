const express = require('express');
const app = express();
let products = require('./products');

app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product? res.status(200).json(product) : res.status(404).json({ message: 'Product not found' });
});

app.delete('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    products = products.filter(p => p.id !== parseInt(req.params.id))
    product ? res.status(200).json(products) : res.status(404).json({ message: 'Product not found' });
});

app.post('/products', (req, res) => {
    const newProduct = {
        id: products[products.length - 1].id + 1,
        name: req.query.name,
        price: req.query.price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.patch('/products/:id', (req, res) => {
    const {name, price} = req.query;
    const product = products.find(p => p.id === parseInt(req.params.id));
    product && (
        name && (product.name = name),
        price && (product.price = price)
    ) ? res.status(200).json(product) : res.status(404).json({ message: 'Product not found or invalid data' });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
