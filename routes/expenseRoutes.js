const express = require('express')
const router = express.Router()
const { create, edit, delete: destroy, list, listByDate } = require('../controllers/expenseController');
const  validateExpenseData  = require('../vaildators/validateExpenseData')
const auth = require('../middleware/auth');

router.post('/create',validateExpenseData ,auth, create);
router.put('/edit/:id',auth ,validateExpenseData, edit);
router.delete('/delete/:id',auth ,validateExpenseData, destroy);
router.get('/list',auth, list);
router.get('/list/:dateFilter',auth, listByDate);

module.exports = router;