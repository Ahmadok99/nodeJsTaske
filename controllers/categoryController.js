const { Category } = require("../models");
/**
 * create user.
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
  * edit category.
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
 * delete category by id.
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
  * get category by id.
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
  * list categorys.
  */
  exports.list = async (req, res) => {
    const categories = await Category.findAll({});

    res.json(categories);
  };
