const express = require("express");
const router = express.Router();
const {
    create,
    edit,
    delete: destroy,
    list,
    listByDate,
} = require("../controllers/expenseController");
const {validateExpenseData} = require("../vaildators/validateExpenseData");
const auth = require("../middleware/auth");

router.post("/", validateExpenseData, auth, create);
router.put("/:id", auth, validateExpenseData, edit);
router.delete("/:id", auth, destroy);
router.get("/", auth, list);
router.get("/:dateFilter", auth, listByDate);

module.exports = router;
