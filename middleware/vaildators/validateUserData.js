const { body, validationResult } = require('express-validator');

const validateUserData = [

  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('email').normalizeEmail(),

  /**
 * This function use to validateUser.
 * @param {import('express').Request} req  user name in req body
 * @param {import('express').Response} res  validation result. 
 * @param {import('express').NextFunction} next - The next middleware function to call
 * @returns {void}
 */
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); 
  },
];
module.exports = validateUserData;
