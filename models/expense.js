'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.User, { foreignKey: 'user_id' });
      Expense.belongsTo(models.Category, { foreignKey: 'category_id' });
    }
  }
  Expense.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    spending_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};