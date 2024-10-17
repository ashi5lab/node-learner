// Example using Express.js
const express = require('express');
const authMiddleware = require('./middlewares/middleware');
const app = express();

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('Hello, Express.js Server!');
});

// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const loginRoute = require('./routes/login');
// Import the middleware

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Apply the middleware globally   

// Or, if you want to apply it to specific routes:
app.use('/users', authMiddleware, usersRoute);
app.use('/products', authMiddleware, productsRoute);

app.use('/login', loginRoute);

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 