const { body, validationResult } = require('express-validator');

const expenseValidation = [
  body('user_id').isString().notEmpty(),
  body('amount').isNumeric().isFloat({ min: 0 }),
  body('spending_date').isISO8601().toDate(),
  body('category_id').isString().notEmpty(),
];

const validateExpenseData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

module.exports = { expenseValidation, validateExpenseData };
