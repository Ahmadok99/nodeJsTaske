// const Joi = require("joi");
// const expenseSchema = Joi.object({
//   user_id: Joi.string().required(),
//   amount: Joi.number().min(0).required(),
//   spending_date: Joi.date().iso().required(),
//   category_id: Joi.string().required(),
// });

// /**
//  * This function use to check expense of user data.
//  * 
//  * @param {*} req 
//  * @param {*} res 
//  * @param {*} next 
//  * @returns 
//  */
// const validateExpenseData = (req, res, next) => {
//   const { error } = expenseSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }
//   next();
// };
// module.exports = validateExpenseData;


const { body } = require('express-validator');

const validateExpenseData = [
  body('user_id').isLength({ min: 6 }).withMessage('user_id must be at least 6 characters long'),
  body('amount').isLength({ min: 6 }).withMessage('amount must be at least 6 characters long'),
  body('spending_date').isLength({ min: 6 }).withMessage('spending_date must be at least 6 characters long'),
  body('category_id').isLength({ min: 6 }).withMessage('category_id must be at least 6 characters long'),

];
module.exports = validateExpenseData;
