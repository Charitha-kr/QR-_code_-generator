const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data (mock database)
const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
];

// A route for getting a specific product by ID
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
