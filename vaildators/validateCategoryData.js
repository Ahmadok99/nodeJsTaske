const Joi = require("joi");
const categorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
});

/**
 * This function use to check validation of category data.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const validateCategoryData = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateCategoryData;
