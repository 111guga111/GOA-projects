const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./pages/index.html');
const aboutPage = fs.readFileSync('./pages/about.html');


// Routing - ხშირი პრაქტიკა, სადაც ბილიკების (path) და მეთოდების (GET,POST...) მიხედვით ვაბრუნებთ სხვადასხვა მონაცემებს ან ვასრულებთ სხვადასხვა მოქმედებებს

server = http.createServer((req, res) => {
    res.writeHead(200, { 
        'content-type': 'text/html'
    });
    
    // Routing
    if(req.url === '/') {
        res.end(homePage);
    } else if(req.url === '/about'){
        res.end(aboutPage);
    } else {
        res.end('<h1>Not Found</h1>')
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});