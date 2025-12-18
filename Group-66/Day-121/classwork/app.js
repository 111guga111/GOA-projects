const http = require('http')

const users = [
  { firstname: "1", lastname: "111", age: 1111 },
  { firstname: "2", lastname: "222", age: 2222 },
  { firstname: "3", lastname: "333", age: 3333 }
];

const server = http.createServer((req, res)=>{

    if (req.url == '/fullname') 
        {res.end('Guram Topchishvili')}

    else if (req.url == '/firstname') 
        {res.end('Gurami')}

    else if (req.url == '/lastname' ) 
        {res.end('Topchishvili')}

    else if (['/0','/1','/2'].includes(req.url)){ 
        const user = users[parseInt(req.url.slice(1))];
        res.end(`${user.firstname} - ${user.lastname} - ${user.age}`);
    }
    else 
        {res.end('Invalid path')}

    

});

server.listen(3000,()=>{
    console.log('listening')
});
