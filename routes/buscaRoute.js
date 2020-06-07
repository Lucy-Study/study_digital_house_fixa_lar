const express = require("express");
const router = express.Router();
const { authUser }  = require("../middleware/authPermitions");
 
router.get("/", authUser, function (req, res, next) {
  res.render("busca");
});

module.exports = router;
