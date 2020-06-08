const express = require("express");
const router = express.Router();
const { authUser }  = require("../middleware/authPermitions");
 
router.get("/", authUser, function (req, res, next) {
  req.user
  res.render("busca", {relacaoPrestadores:[{
      nome: 'fulano',
      regiao: 'sul',
      servicos: 'nada'
    },
    {
      nome: 'teste 2',
      regiao: 'norte',
      servicos: 'nada 2'
    },
    {
      nome: 'teste 2',
      regiao: 'norte',
      servicos: 'nada 2'
    }
  ]});
});

module.exports = router;
