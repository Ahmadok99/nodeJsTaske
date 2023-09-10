const { Expense } = require('../models');
const jwt = require("jsonwebtoken");

/**
 * create expense.
 */
exports.create = async (req, res) => {
  const { category_id, spending_date, amount } = req.body;
  const token = req.headers.authorization;

  const expense = await Expense.create({
    user_id,
    category_id,
    spending_date,
    amount,
  });

  res.status(201).json(expense);

},

  /**
   * edit expense.
   */
  exports.edit = async (req, res) => {
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

  /**
   * delete expense by id.
   */
  exports.delete = async (req, res) => {
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

  /**
   * list expenses.
   */
  exports.list = async (req, res) => {

    const expenses = await Expense.findAll({
      where: {},
    });

    res.json(expenses);
  },

  /**
   * list expenses by date.
   */
  exports.listByDate = async (req, res) => {
    const { dateFilter } = req.params;
    const expenses = await Expense.findAll({
      where: [{
        spending_date: new Date(dateFilter),
      }],
    });

    res.json(expenses);
  }



