const jwt = require('jsonwebtoken');

// Generate new token.
function genToken(payload, secretKey, expiresIn = '1h') {
  return jwt.sign(payload, secretKey, { expiresIn });
}

module.exports = genToken;
