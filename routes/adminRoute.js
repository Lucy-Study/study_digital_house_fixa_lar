const express = require('express');
const router = express.Router();
const { 
  userValidationRules,
  validate 
} = require('../middleware/loginValidator');

const adminController = require('../controllers/adminController');
const { authRole } = require('../middleware/authPermitions');

router.get('/', adminController.login);
router.post('/', adminController.index);

router.get('/index', authRole, adminController.show);

router.delete('/:id', adminController.delete);

router.get('/store', adminController.cadastro);
router.post('/store',  userValidationRules(), validate,adminController.store);

router.get('/update/:id', adminController.updateForm);
router.put('/update/:id', adminController.update)



module.exports = router;