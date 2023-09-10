const jwt = require('jsonwebtoken');

const authenticateToken = function (req, res, next) {
    const token = req.headers.authorization; 

    if (!token) {
        return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, "jwtPrivateKey")

    if (!decoded) {
        return res.sendStatus(403); 
    }

    next(); 
}

module.exports = authenticateToken;