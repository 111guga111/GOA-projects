const express = require('express');
const app = express();

app.use(express.json());

let books = [];
let Counter = 1;

app.post('/books', (req, res) => {
    const book = {id: Counter++, ...req.body};

    books.push(book);
    res.status(201).json(book);
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: 'cant find the book' });
    }

    res.json(book);
});


app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({ message: 'წიგნი ვერ მოიძებნა' });
    }
    
    books = books.filter(b => b.id !== id);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
