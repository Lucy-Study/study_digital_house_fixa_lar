var express = require("express");
var router = express.Router();
const { authUser } = require("../middleware/authPermitions");

router.get("/", authUser, function (req, res, next) {
  res.render("contratar");
});

module.exports = router;
