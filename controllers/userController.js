const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const config = require("config");
const genToken = require("./tokenMiddleware");
/**
 * register new user.
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
   * login user.
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
   * list users.
   */
  exports.list = async (req, res) => {
    const Users = await User.findAll();
    res.json(Users);
  },
  /**
   * delete user by id.
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
