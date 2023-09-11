require("dotenv").config();

const jwt = require("jsonwebtoken");

/**
 * This function use to check if the token is valide.
 *
 * @param {import('express').Request} req  token in req header.
 * @param {import('express').Response} res  check if the token is valide.
 * @param {import('express').NextFunction} next - The next middleware function to call.
 * @returns {void}
 */
const authenticateToken = function (req, res, next) {
    const token = req.headers.authorization;
    const payload = {
        userid:1
    }
    if (!token) {
        return res.sendStatus(401);
    }

    const decoded = jwt.verify(payload, token, process.env.jwtPrivateKey);

    if (!decoded) {
        return res.sendStatus(403);
    }

    next();
};

module.exports = authenticateToken;
