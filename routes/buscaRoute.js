var express = require("express");
var router = express.Router();

var buscaController = require("../controllers/buscaController");

router.get("/", buscaController.buscarPrestador);

module.exports = router;
