const http = require('http')
const fs = require('fs')

let products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

const server = http.createServer((req,res) =>{
    let body = '';

    const handleGetRequest = (req,res)=>{
        res.setHeader('Content-Type', 'application/json');

        const [startGet, idGet] = req.url.split('/').slice(1)

        if (req.url === '/products') {
            res.end(JSON.stringify(products));
            return;
        }
        if( startGet === 'products'){
            const found = products.find(p => p.id == idGet);
            if (!found) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "Product not found" }));
            }
            return res.end(JSON.stringify(found));
        }
        
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Not found" }));
    }

    const handlePostRequest = (req, res, body) => {
        res.setHeader('Content-Type', 'application/json');

        if (req.url === '/product') {

            let parsed;

            try {
                parsed = JSON.parse(body);
            } catch {
                res.statusCode = 400;
                return res.end(JSON.stringify({ error: "Invalid JSON" }));
            }


            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;


            const newProduct = {
                id: newId,
                ...parsed
            };

            products.push(newProduct);

          
            return res.end(JSON.stringify({
                message: "Product added successfully",
                product: newProduct
            }));
        }

        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Not found" }));
    };

    const handleDeleteRequest = (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        const [startDelete, idDelete] = req.url.split('/').slice(1);

        if (startDelete === 'products' && idDelete) {

            products = products.filter(p => p.id != idDelete);
            
            fs.writeFileSync('./products.json', JSON.stringify(products), 'utf-8');

            return res.end(JSON.stringify({
                message: "Product deleted successfully",
            }));
        }

        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Not found" }));
    };

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        switch (req.method) {
            case 'GET':
                handleGetRequest(req, res);
                break;
            case 'POST':
                handlePostRequest(req, res, body);
                break;
            case 'DELETE':
                handleDeleteRequest(req, res);
                break;
            default:
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: `Method ${req.method} not allowed` }));
        }
    });
});



server.listen(3000,()=>{
    console.log('Server is listening...')
})