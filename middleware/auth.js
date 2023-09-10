const jwt = require("jsonwebtoken");
const config = require("config");

//check for ENV.jwt if it's exist or not.
if (!config.get("jwtPrivateKey")) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined.");
    process.exit(1);
}

/**
 * This function use to check if the token is valide.
 * 
 * @param {*} req  token in req header.
 * @param {*} res  check if the token is valide. 
 * @param {*} next 
 * @returns 
 */
const authenticateToken = function (req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

    if (!decoded) {
        return res.sendStatus(403);
    }

    next();
};

module.exports = authenticateToken;
