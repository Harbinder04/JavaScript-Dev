const jwt = require('jsonwebtoken');
const JWT_SECRET = "erwfwswo"
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    const token = req.headers.authorization;
    const words = token.split(" "); // split Bearer & token 
    const jwtToken = words[0]; // token 

    const decoded = jwt.verify(jwtToken, JWT_SECRET);

    if(decoded){
        next();
    }
    res.status(411).send('user not found');
}

module.exports = adminMiddleware;