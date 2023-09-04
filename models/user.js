const { DataTypes,INTEGER } = require('sequelize');
const db = require('../db');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const { method } = require('lodash');


const userSchema = {
  id:{type:INTEGER,
  autoIncrement: true,
  primaryKey: true},
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  last_login: DataTypes.DATE,
};

module.exports.generateAuthToken= function() {
  const token = jwt.sign({ _id: this._id}, config.get('task_jwtPrivateKey'));
  return token;
}
const User = db.define('User', userSchema );

function validateUser(User){
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  });
  return schema.validate(User);



}


exports.User = User;
exports.validateUser=validateUser;
