// const jwt = require('jsonwebtoken');


// /**
//  * This function use to genTokens.
//  * 
//  * @param {import('express').Request} req  jwt info in req body
//  * @param {import('express').Response} res  token. 
//  * @param {import('express').NextFunction} next - The next middleware function to call
//  * @returns {void}
//  */
// function generateTokenMiddleware( payload,secretKey, expiresIn = '1h') {

//   return (req, res, next) => {
//     const secretKey = process.env.jwtPrivateKey;
//     const token = jwt.sign( payload, secretKey, { expiresIn });

//     return token;

//   };
// }

// module.exports = generateTokenMiddleware;