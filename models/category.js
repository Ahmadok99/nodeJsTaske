const { DataTypes } = require('sequelize');
const db = require('../db');

const Category = db.define('Category', {
  name : DataTypes.STRING,
});
module.exports = Category;