const Joi = require('joi');
const expenseSchema = Joi.object({
    user_id: Joi.string().required(),
    amount: Joi.number().min(0).required(),
    spending_date: Joi.date().iso().required(),
    category_id: Joi.string().required(),
});

const validateExpenseData = (req, res, next) => {
    const { error } = expenseSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
module.exports = validateExpenseData