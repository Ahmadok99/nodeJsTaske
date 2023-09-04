const express = require('express')
const router = express.Router()
const { register, login, list, delete: destroy } = require('../controllers/userController');
const  validateUserData  = require('../vaildators/validateUserData')


router.post('/register',validateUserData, register);
router.post('/login',validateUserData, login);
router.get('/list', list);
router.delete('/delete/:id', destroy);


module.exports = router;