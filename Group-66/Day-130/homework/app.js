const express = require('express');
const app = express();
app.use(express.json());


let posts = [
    { 
        id: 1, 
        title: "First Post", 
        comments: [
            { id: 1, text: "Nice post!" }
        ]
    },
    { 
        id: 2, 
        title: "Second Post", 
        comments: [] 
    }
];


app.post('/posts/:id/comments', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.id));
    if (!post) return res.status(404).json({ error: "Post not found" });

    const newComment = {
        id: post.comments.length ? post.comments[post.comments.length-1].id + 1 : 1,
        text: req.body.text
    };

    post.comments.push(newComment);
    res.json({ message: "Comment added", comment: newComment });
});


app.get('/posts/:id/comments', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.id));
    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json(post.comments);
});

app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.postId));
    if (!post) return res.status(404).json({ error: "Post not found" });

    const comment = post.comments.find(c => c.id === Number(req.params.commentId));
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    res.json(comment);
});

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.postId));
    if (!post) return res.status(404).json({ error: "Post not found" });

    const index = post.comments.findIndex(c => c.id === Number(req.params.commentId));
    if (index === -1) return res.status(404).json({ error: "Comment not found" });

    post.comments.splice(index, 1);
    res.json({ message: "Comment deleted" });
});



let cart = [];


app.post('/cart', (req, res) => {
    const newItem = {
        id: cart.length ? cart[cart.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price
    };
    cart.push(newItem);
    res.json({ message: "Item added to cart", item: newItem });
});


app.get('/cart', (req, res) => {
    res.json(cart);
});


app.get('/cart/:id', (req, res) => {
    const item = cart.find(i => i.id === Number(req.params.id));
    if (!item) return res.status(404).json({ error: "Item not found" });

    res.json(item);
});


app.delete('/cart/:id', (req, res) => {
    const index = cart.findIndex(i => i.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Item not found" });

    cart.splice(index, 1);
    res.json({ message: "Item deleted" });
});

app.listen(3000, () => console.log("Server running"));
