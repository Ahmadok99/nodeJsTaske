const express = require("express");
const router = express.Router();
const validate = require('../middleware/validation')
const auth = require("../middleware/auth");
const {
    create,
    edit,
    delete: destroy,
    list,
    get,
} = require("../controllers/categoryController");
const categoryValidation = require("../vaildators/validateCategoryData");

router.post("/", auth, categoryValidation, validate, create);
router.put("/:id", auth, categoryValidation, validate, edit);
router.delete("/:id", auth, destroy);
router.get("/:id", auth, get);
router.get("/", auth, list);

module.exports = router;
