var express = require("express");
var router = express.Router();

var PrestadorController = require("../controllers/PrestadorController");
const upload = require('../middleware/prestadorUpload');

router.get("/", PrestadorController.mostrar);
router.post("/cadastro", PrestadorController.cadastro);

router.get('/:id/admin', PrestadorController.admin);
router.put('/:id/edit', upload.any(), PrestadorController.put);

module.exports = router;
