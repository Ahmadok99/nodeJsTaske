const Category = require('../models/Category');
const jwt = require("jsonwebtoken");

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const user_id = req.id;

    const token = req.headers.authorization;

    if (!token) {
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, "jwtPrivateKey")

    if (!decoded) {
      return res.sendStatus(403);
    }

    const category = await Category.create({
      user_id,
      name,
    });

    res.status(201).json(category);
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;



    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.update({ name });

    res.json(category);

  },

  delete: async (req, res) => {
    const { id } = req.params;


    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.destroy();
    res.status(204).json({ message: 'Expense deleted successfully' });


  },

  get: async (req, res) => {
    const id = req.params.id;


    const category = await Category.findOne({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);


  },

  list: async (req, res) => {

    const categories = await Category.findAll({
    });

    res.json(categories);

  },
};

module.exports = categoryController;
