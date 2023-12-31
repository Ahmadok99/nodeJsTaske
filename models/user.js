'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Category, { foreignKey: 'user_id' });
      User.hasMany(models.Expense, { foreignKey: 'user_id' });
    }
  }
  User.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      last_login: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};