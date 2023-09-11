const { Category } = require("../models");

/**
 * This function use to create a new category.
 * 
 * @param {import('express').Request} req  category data in req body.
 * @param {import('express').Response} res  create a category.
 * @returns 
 */
exports.create = async (req, res) => {
  const { name, user_id } = req.body;

  const category = await Category.create({
    user_id,
    name,
  });

  res.status(201).json(category);
},

/**
 * This function use to edit a category.
 * 
 * @param {import('express').Request} req  category data in req.
 * @param {import('express').Response} res  edit a category. 
 * @returns 
 */
  exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({ name });

    res.json(category);
  },

/**
 * This function use to delete a category.
 * 
 * @param {import('express').Request} req  category id in req header.
 * @param {import('express').Response} res  delete a category. 
 * @returns 
 */
  exports.delete = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.destroy();
    res.status(204).json({ message: "Expense deleted successfully" });
  },

/**
 * This function use to list a category by id.
 * 
 * @param {import('express').Request} req  category id in req header.
 * @param {import('express').Response} res  get a category. 
 * @returns 
 */
  exports.get = async (req, res) => {
    const id = req.params.id;

    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  },

/**
 * This function use to list a category.
 * 
 * @param {import('express').Request} req  category data in req body.
 * @param {import('express').Response} res  list a categorys. 
 */
  exports.list = async (req, res) => {
    const categories = await Category.findAll({});

    res.json(categories);
  };
