const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require('config');
const _ = require('lodash');
const { User, validateUser } = require("../models/User");

const userController = {
    register: async (req, res) => {


        const { error } = validateUser(req.body);
        if (error) return res.status(400), send(error.details[0].message);

        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const emailValidation = await User.findOne({ where: { email } });

        if (emailValidation) {
            return res.status(401).json({ error: "User alraedy exist" });
        } else {

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                last_login: new Date(),
            });
            await user.save();

            const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey', {
                expiresIn: "1h",
            });

            res.json({ user, token });
        }


    },
    login: async (req, res) => {
        const { email, password } = req.body;


        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            res.status(401).json({ error: "Invalid credentials" });


        const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey', {
            expiresIn: "1h",
        });

        res.json({ user, token });
    },

    list: async (req, res) => {

        const Users = await User.findAll();
        res.json(Users);

    },

    delete: async (req, res) => {
        const { id } = req.params;


        const user = await User.findOne({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();
        res.status(204).send();

    },
};

module.exports = userController;
