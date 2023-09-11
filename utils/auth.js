const jwt = require('jsonwebtoken');

/**
 * 
 * @param {payload} payload to add in token. 
 * @returns token
 */
function createToken(data) {
  const secretKey = process.env.jwtPrivateKey
  const token = jwt.sign(data, secretKey);
  return token;
}

module.exports = { createToken };