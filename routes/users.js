const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/register', userController.create);
router.post('/register', userController.store);


module.exports = router;
