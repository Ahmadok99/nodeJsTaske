const { body } = require('express-validator');

const categoryValidation = [
  body('name').isLength({ min: 3 }).withMessage('Username must be at least 5 characters long'),
];
module.exports = categoryValidation;
