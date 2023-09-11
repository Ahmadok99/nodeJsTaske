const { body } = require('express-validator');

const validateUserData = [

  body('name').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('email').normalizeEmail(),]

module.exports = validateUserData;
