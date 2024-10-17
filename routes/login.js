const jwt = require('jsonwebtoken');

// Use express built-in middleware for parsing JSON

// Login route
// router.post('/login', (req, res) => {
//     // For demonstration purposes, we'll use a simple username/password check
//     // In a real application, you'd validate against a database
//     const { username, password } = req.body;

//     // Simple check - replace with actual authentication logic
//     if (username === 'admin' && password === 'password') {
//         // Create a JWT token
//         const token = jwt.sign(
//             { user: username },
//             process.env.JWT_SECRET || 'mysecretkey',
//             { expiresIn: '1h' }
//         );

//         res.json({ token });
//     } else {
//         res.status(401).json({ message: 'Authentication failed' });
//     }
// });

// routes/products.js
const express = require('express');
const router = express.Router();

// Define a route
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
                // Create a JWT token
                const token = jwt.sign(
                    { user: username },
                    'mysecretkey',
                    { expiresIn: '1h' }
                );
        
    res.send(`login successful ${token})`);// this gets executed when user visit http://localhost:3000/products
            }
});
// export the router module so that server.js file can use it
module.exports = router;