const jwt = require('jsonwebtoken');

const secretKey = process.env.jwtPrivateKey;
/**
 * This function use to genTokens.
 * 
 * @param {import('express').Request} req  jwt info in req body
 * @param {import('express').Response} res  token. 
 * @param {import('express').NextFunction} next - The next middleware function to call
 * @returns {void}
 */
function generateTokenMiddleware( expiresIn = '1h') {

  return (req, res, next) => {

    const token = jwt.sign( secretKey, { expiresIn });

    req.token = token;

    next();
  };
}

module.exports = generateTokenMiddleware;