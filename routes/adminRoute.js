const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.login);
router.post('/', (req, res) => {
  const { mail, passwd } = req.body;

  console.log(mail, passwd);
  const admin = {
    mail,
    passwd
  }
  return res.json(admin)
})

router.get('/v1/store', adminController.store);

module.exports = router;