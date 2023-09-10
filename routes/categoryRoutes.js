const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
    create,
    edit,
    delete: destroy,
    list,
    get,
} = require("../controllers/categoryController");
const {validateCategoryData} = require("../vaildators/validateCategoryData");

router.post("/", auth, validateCategoryData, create);
router.put("/:id", auth, validateCategoryData, edit);
router.delete("/:id", auth, destroy);
router.get("/:id", auth, get);
router.get("/", auth, list);

module.exports = router;
