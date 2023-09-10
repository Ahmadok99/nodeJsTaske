const express = require("express");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/expense", expenseRoutes);

module.exports = router;
