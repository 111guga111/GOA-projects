const express = require('express');
const animals = require('./animals.json');

const app = express();

app.use(express.json());


app.get('/animals', (req, res) => {
    res.json(animals);
});

app.get('/animals/:id', (req, res) => {
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
});

app.post('/animals', (req, res) => {
    const newAnimal = {
        id: animals.length + Math.floor(Math.random() * 100),
        name: req.body.name,
        type: req.body.type,
        habitat: req.body.habitat
    };
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

app.patch('/animals/:id', (req, res) => {
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (animal) {
        if (req.body.name) {
            animal.name = req.body.name
        };
        if (req.body.type) {
            animal.type = req.body.type
        };
        if (req.body.habitat) {
            animal.habitat = req.body.habitat
        };
        
        res.json(animal);

    } else {
        res.status(404).send('Animal not found');
    }
});


app.delete('/animals/:id', (req, res) => {
    const index = animals.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedAnimal = animals.splice(index, 1);
        res.json(deletedAnimal);
    }else {
        res.status(404).send('Animal not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
