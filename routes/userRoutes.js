const express = require("express");
const router = express.Router();
const validate = require('../middleware/validation')
const {
    register,
    login,
    list,
    delete: destroy,
} = require("../controllers/userController");
const validateUserData = require("../vaildators/validateUserData");

router.post("/register", validateUserData, validate, register);
router.post("/login", validateUserData, validate, login);
router.get("/", list);
router.delete("/:id", destroy);

module.exports = router;
