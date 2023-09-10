const { body, validationResult } = require('express-validator');

// Define a middleware to validate user data
const validateUserData = [
  body('name').isString().isLength({ min: 3, max: 30 }).withMessage('Name must be between 3 and 30 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUserData, handleValidationErrors };
