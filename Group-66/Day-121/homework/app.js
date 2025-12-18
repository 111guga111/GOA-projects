const http = require('http')

const users = [
  { firstname: "1", lastname: "111", age: 1111 },
  { firstname: "2", lastname: "222", age: 2222 },
  { firstname: "3", lastname: "333", age: 3333 },
];

function checkType(query) {
  
  const type = query.get(`type`);

  if (type === 'admin') {
    return 'Hello admin';

  } else if (type === 'user') {
    return 'Hello user';

  } else if (type === 'moderator') {
    return 'Hello moderator';

  } else {
    return 'invalid type';
  }

}

const server = http.createServer((req, res)=>{

    const url = new URL(req.url, `http://${req.headers.host}`);
    const typeMessage = checkType(url.searchParams);
    
    if (url.pathname == '/text') 
        {res.end(`Guram Topchishvili is the creator of this server (${typeMessage})`)}

    else if(url.pathname == '/json') 
        res.end(JSON.stringify(users));

    else if(url.pathname == '/number') 
        res.end((Math.round(Math.random() * 10)).toString());
    
});


server.listen(3000,()=>{
    console.log('server is running on port 3000')
});
