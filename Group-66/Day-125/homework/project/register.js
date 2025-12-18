const http = require('http');
const fs = require('fs');

const USERS_FILE = './users.json';

const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

const writeUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));


const server = http.createServer((req,res)=>{

    let body = '';

    const deleteUser = (req, res, id) => {
        const users = readUsers();
        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'User not found' }));
        }

        users.splice(index, 1);
        writeUsers(users);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'User deleted successfully' }));
    };

    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        res.setHeader('Content-Type', 'application/json');

        let data = {};
        try {
            data = body ? JSON.parse(body) : {};
        } catch {
            res.statusCode = 400;
            return res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }

        if (req.method === 'POST' && req.url === '/register') {
            const { email, password } = data;
            const users = readUsers();

            const exists = users.find(u => u.email === email);
            if (exists) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ error: 'Email already registered' }));
            }


            const newUser = { id: Date.now(), email, password };
            users.push(newUser);
            writeUsers(users);

            return res.end(JSON.stringify({ message: 'Registered successfully' }));

        }


        if (req.method === 'POST' && req.url === '/login') {
            const { email, password: inputPassword } = data;
            const users = readUsers();

            const user = users.find(
                u => u.email === email && u.password === inputPassword
            );

            if (!user) {
                res.statusCode = 401;
                return res.end(JSON.stringify({ error: 'Invalid credentials' }));
            }

            const { password, ...safeUser } = user;
            return res.end(JSON.stringify(safeUser));
        }


        if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
            const { role } = data;
            const id = Number(req.url.split('/')[2]);

            if (role !== 'admin') {
                res.statusCode = 403;
                return res.end(JSON.stringify({ error: 'Forbidden' }));
            }

            res.setHeader('Content-Type', 'application/json');
            return deleteUser(req, res, id);
        }


        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not found' }));

    });
});

server.listen(3000,()=>{
    console.log('server is running on 3000 port...')
})