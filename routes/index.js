const express = require("express");
const router = express.Router();
const userRoutes = require('../routes/userRoutes')
const categoryRoutes = require('../routes/categoryRoutes')
const expenseRoutes = require('../routes/expenseRoutes')



router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/expense", expenseRoutes);

module.exports = router;
