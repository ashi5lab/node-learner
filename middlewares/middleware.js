const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('Authorization');

    // Check if token doesn't exist
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const token1 = token.replace('bearer ', '');
        // Verify token
        const decoded = jwt.verify(token1.trim(), "mysecretkey");
        
        // Add user from payload
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
