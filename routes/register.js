const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const { 
  userValidationRules,
  validate 
} = require('../middleware/loginValidator');


/* GET users listing. */


// form with cep informations
router.get('/register', registerController.create);
router.post('/register',
 userValidationRules(), validate,  registerController.store);


module.exports = router;
