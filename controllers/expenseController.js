const { Expense } = require('../models');


/**
 * This function use to create a new expense.
 * 
 * @param {import('express').Request} req  expense data in req body.
 * @param {import('express').Response} res  create a expense
 */
exports.create = async (req, res) => {
  const { user_id, category_id, spending_date, amount } = req.body;
  const expense = await Expense.create({
    user_id,
    category_id,
    spending_date,
    amount,
  });

  res.status(201).json(expense);
},

/**
 * This function use to edit a expense.
 * 
 * @param {import('express').Request} req  expense data in req.
 * @param {import('express').Response} res  edit a expense.
 * @returns 
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
 * This function use to delete a expense.
 * 
 * @param {import('express').Request} req  expense id in req header.
 * @param {import('express').Response} res  delete a expense. 
 * @returns 
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
 * This function use to list a expenses.
 * 
 * @param {import('express').Request} req  expense data in req body.
 * @param {import('express').Response} res  list a expenses
 */
  exports.list = async (req, res) => {
    const expenses = await Expense.findAll({
      where: {},
    });

    res.json(expenses);
  },

/**
 * This function use to list a expenses by date.
 * 
 * @param {import('express').Request} req  expense data in req body.
 * @param {import('express').Response} res  list a expense. 
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



