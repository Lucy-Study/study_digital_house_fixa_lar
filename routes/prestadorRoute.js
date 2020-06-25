var express = require("express");
var router = express.Router();

var PrestadorController = require("../controllers/PrestadorController");
const upload = require('../middleware/prestadorUpload');
const authPrestador = require('../middleware/authPrestador');

router.get("/", PrestadorController.mostrar);
router.post("/cadastro", PrestadorController.cadastro);

router.get('/:id/admin', authPrestador, PrestadorController.admin);
router.put('/:id/edit', authPrestador, upload.any(), PrestadorController.put);

router.post("/login", PrestadorController.login);


module.exports = router;
