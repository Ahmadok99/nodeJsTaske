const { Expense } = require('../models');
const jwt = require("jsonwebtoken");

const expenseController = {
  create: async (req, res) => {
    const { category_id, spending_date, amount } = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, "jwtPrivateKey")

    if (!decoded) {
      return res.sendStatus(403);
    }

    const expense = await Expense.create({
      user_id: 1,
      category_id,
      spending_date,
      amount,
    });

    res.status(201).json(expense);

  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { category_id, spending_date, amount } = req.body;

    const expense = await Expense.findOne({
      where: { id },
    });

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    await expense.update({ category_id, spending_date, amount });

    res.json(expense);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const expense = await Expense.findOne({
      where: { id },
    });

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    await expense.destroy();

    res.json({ message: 'Expense deleted successfully' });

  },

  list: async (req, res) => {

    const expenses = await Expense.findAll({
      where: {},
    });

    res.json(expenses);
  },

  listByDate: async (req, res) => {
    const { dateFilter } = req.params;
    const expenses = await Expense.findAll({
      where: [{
        spending_date: new Date(dateFilter),
      }],
    });

    res.json(expenses);
  },
};

module.exports = expenseController;
