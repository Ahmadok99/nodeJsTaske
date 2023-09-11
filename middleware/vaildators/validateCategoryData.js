const { body, validationResult } = require('express-validator');


const categoryValidation = [
  body('name').isLength({ min: 3 }).withMessage('Username must be at least 5 characters long'),
  /**
 * This function use to validateCategory.
 * @param {import('express').Request} req  category name in req body
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
module.exports = categoryValidation;
