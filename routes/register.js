const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const { 
  userValidationRules,
  validate 
} = require('../middleware/loginValidator');


// form with cep informations
router.get('/v1/register', registerController.create);
router.post('/v1/register',
 userValidationRules(), validate,  registerController.store);


module.exports = router;
