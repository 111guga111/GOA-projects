const express = require('express');
const app = express();

app.use(express.json());

/*

    Route — is a path that also has http method (GET, POST, etc.)

    Routing — is a way to send diffrent responses based on diffrent paths and http methods.https://support.discord.com/

*/


app.get('/', (req, res) => {
    res.send('main page');
});


app.get('/admin', (req, res) => {
    res.json({
        name: 'Guga',
        age: 17
    });
});


app.get('/name', (req, res) => {
    res.send('page name is classwork');
});


app.get('/status', (req, res) => {
    res.send('status is ok');
});


app.get('/about', (req, res) => {
    res.send(`i am doing classwork`);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
