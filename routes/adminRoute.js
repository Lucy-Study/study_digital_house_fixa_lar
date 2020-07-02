const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.login);
router.post('/', adminController.index);


router.get('/v1/store', adminController.store);

module.exports = router;