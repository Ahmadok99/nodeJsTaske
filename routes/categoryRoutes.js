const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const { create, edit, delete: destroy, list, get } = require('../controllers/categoryController');
const validateCategoryData = require('../vaildators/validateCategoryData')

router.post('/create'  ,auth, create);
router.put('/edit/:id',auth ,validateCategoryData, edit);
router.delete('/delete/:id',auth ,validateCategoryData, destroy);
router.get('/get/:id',auth, get);
router.get('/list',auth, list);

module.exports = router;