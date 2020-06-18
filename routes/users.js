const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { userValidationRules, validate } = require('../middleware/loginValidator');

/* GET users listing. */
router.get('/register', userController.create);
router.post('/register', userValidationRules(), validate, userController.store);


module.exports = router;