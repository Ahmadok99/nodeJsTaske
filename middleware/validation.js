const {validationResult} = require('express-validator');
/**
  * This function use to validateUser.
 * @param {import('express').Request} req  user name in req body
 * @param {import('express').Response} res  validation result. 
 * @param {import('express').NextFunction} next - The next middleware function to call
 * @returns {void}
 */
module.exports =    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); 
    }

