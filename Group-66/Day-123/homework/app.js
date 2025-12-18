const http = require('http');
const fs = require('fs');

const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);


    if (url.pathname === '/') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cars));
        return;
    }


    if (url.pathname === '/cars/car') {
        const id = parseInt(url.searchParams.get('id'));


        if (!id) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "id is required" }));
            return;
        }

        const car = cars.find(c => c.id === id);


        if (!car) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Car not found" }));
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(car));
        return;
    }
    
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Invalid path" }));
});

server.listen(3000, () => {
  console.log("Server is running...");
});
