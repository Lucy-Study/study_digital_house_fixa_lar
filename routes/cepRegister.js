const express = require('express');
const router = express.Router();

const cepController = require('../controllers/cepController')

/* GET users listing. */

// form to insert cep information return cep
router.get('/cepRegister', cepController.create);
router.post('/cepSearchRegister', cepController.store);



module.exports = router;
