const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));

const server = http.createServer((req, res) => {
    const [path, query] = req.url.split('?');
    const queryParams = querystring.parse(query);

    let filtered = products;

    if (queryParams.category) {
        filtered = filtered.filter(p => p.category === queryParams.category);
    }

    if (queryParams.minPrice) {
        filtered = filtered.filter(p => p.price >= parseFloat(queryParams.minPrice));
    }

    if (queryParams.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseFloat(queryParams.maxPrice));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filtered));
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
