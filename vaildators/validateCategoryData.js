const { body, validationResult } = require("express-validator");

const categoryValidation = [
  body("name").isString().isLength({ min: 3, max: 50 }).notEmpty(),
];

const validateCategoryData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

module.exports = { categoryValidation, validateCategoryData };
