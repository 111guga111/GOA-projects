const http = require('http');
const fs = require('fs');

const USERS_FILE = './users.json';

const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

const writeUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));


const server = http.createServer((req,res)=>{
    let body = '';

    req.on('data', chunk => body += chunk);
    req.on('end', () => {

        if (req.method === 'POST' && req.url === '/register') {
            const { email, password } = JSON.parse(body);
            const users = readUsers();

            const exists = users.find(u => u.email === email);
            if (exists) {
                res.statusCode = 400;
                return res.end('An email is already registered');
            }

            const newUser = { id: Date.now(), email, password };
            users.push(newUser);
            writeUsers(users);

            return res.end('Registered successfully');
        }


        if (req.method === 'POST' && req.url === '/login') {
            const { email, password } = JSON.parse(body);
            const users = readUsers();

            const user = users.find(
                u => u.email === email && u.password === password
            );

            if (!user) {
                res.statusCode = 401;
                return res.end('Invalid credentials');
            }

            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(user));
        }

        res.statusCode = 404;
        res.end('Not found');
    });
});

server.listen(3000,()=>{
    console.log('server is running on 3000 port...')
})