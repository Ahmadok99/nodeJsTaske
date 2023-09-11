const bcrypt = require("bcrypt");
const { User } = require("../models");
const config = require("config");
const genToken = require("../middleware/gentoken");

/**
 * This function use to register a new user.
 * 
 * @param {import('express').Request} req  user data in req body.
 * @param {import('express').Response} res  create a user. 
 */
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const emailValidation = await User.findOne({ where: { email } });

  if (emailValidation) {
    return res.status(401).json({ error: "User already exist" });
  } else {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      last_login: new Date(),
    });
    await user.save();
    const token = genToken({ _id: user._id }, config.get("jwtPrivateKey"));
    res.json({ user, token });
  }
},

/**
 * This function use to login a user
 * 
 * @param {import('express').Request} req  user data in req body.
 * @param {import('express').Response} res  login a user. 
 * @returns 
 */
  exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      res.status(401).json({ error: "Invalid credentials" });
    const token = genToken({ _id: user._id }, config.get("jwtPrivateKey"));
    res.json({ user, token });
  },
/**
 * This function use to list a users.
 * 
 * @param {import('express').Request} req  user data in req body.
 * @param {import('express').Response} res  list a users. 
 */
  exports.list = async (req, res) => {
    const Users = await User.findAll();
    res.json(Users);
  },

/**
 * This function use to delete a user.
 * 
 * @param {import('express').Request} req  user id in req header.
 * @param {import('express').Response} res  delete a user.  
 * @returns 
 */
  exports.delete = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    res.status(204).send();
  };
