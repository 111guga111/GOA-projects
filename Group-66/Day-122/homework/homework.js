const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/students' && req.method === 'GET') {

    const text = url.searchParams.get('text');
    res.end(text || 'No text provided');

  } else {
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
