const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const authController = require("../controllers/authController");

router.get("/login", authController.create);
router.post("/login", authController.store);

router.get("/resetPassword", (req, res) => {
  res.json({message: 'hi form user/vi/resetPassword'})
})

router.post("/logout", authController.destroy);


module.exports = router;