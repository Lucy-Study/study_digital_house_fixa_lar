const Busca = require("../models/Busca");

let buscaController = {
  buscarPrestador: (req, res) => {
    let relacaoPrestadores = Busca.buscarPrestador();
    res.render("busca", { relacaoPrestadores });
  },
};

module.exports = buscaController;
