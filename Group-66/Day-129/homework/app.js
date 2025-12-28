const express = require('express');
const app = express();

app.use(express.json());


const users = [
    { id: 1, name: "Giorgi", favouriteFilm: "Inception" },
    { id: 2, name: "Nika", favouriteFilm: "Interstellar" }
];


let tasks = [
    { id: 1, task: "Do homework" },
    { id: 2, task: "Go training" }
];


app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    const film = req.query.favouriteFilm;

    if (!user) return res.status(404).send("User not found");

    user.favouriteFilm = film; 

    res.send(`user ${user.id}'s favourite film to watch is ${film}`);
});


const random = Math.floor(Math.random() * 10) + 1; // 1-10
app.post('/guess/:number', (req, res) => {
    const num = Number(req.params.number);

    if (num === random) return res.json({ message: "You guessed the random number" });
    if (num < random) return res.json({ message: "Your number is low" });

    res.json({ message: "Your number is higher than the random number, try again later." });
});


app.delete('/tasks', (req, res) => {
    const id = Number(req.query.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) return res.status(404).json({ error: "Task not found" });

    tasks.splice(index, 1);
    res.json({ message: `Task with id ${id} deleted successfully` });
});

app.listen(3000, () => console.log("Server running on port 3000"));
