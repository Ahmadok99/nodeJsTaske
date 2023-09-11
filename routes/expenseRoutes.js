const express = require("express");
const router = express.Router();
const validate = require('../middleware/validation')
const {
    create,
    edit,
    delete: destroy,
    list,
    listByDate,
} = require("../controllers/expenseController");
const validateExpenseData = require("../vaildators/validateExpenseData");
const auth = require("../middleware/auth");

router.post("/", validateExpenseData, validate, auth, create);
router.put("/:id", auth, validateExpenseData, validate, edit);
router.delete("/:id", auth, destroy);
router.get("/", auth, list);
router.get("/:dateFilter", auth, listByDate);

module.exports = router;
