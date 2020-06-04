const Busca = require("../models/Busca");

//ARRAY DE TESTE TEMP
const listaTemp = [
  { nome: "John Doe", regiao: "Leste", servicos: "Manutenção" },
  { nome: "Airton", regiao: "Norte", servicos: "Conserto" },
  { nome: "Pereira", regiao: "Sul", servicos: "Troca" },
  { nome: "Zé", regiao: "Norte", servicos: "Conserto, Manutenção" },
  { nome: "Everton", regiao: "Centro", servicos: "Manutenção, Troca" },
  { nome: "John Doe", regiao: "Leste", servicos: "Manutenção" },
  { nome: "Airton", regiao: "Norte", servicos: "Conserto" },
  { nome: "Pereira", regiao: "Sul", servicos: "Troca" },
  { nome: "Zé", regiao: "Norte", servicos: "Conserto, Manutenção" },
  { nome: "Everton", regiao: "Centro", servicos: "Manutenção, Troca" },
];

let buscaController = {
  listarPrestador: (req, res) => {
    let relacaoPrestadores = Busca.listarPrestador();
    res.render("busca", { relacaoPrestadores });
  },

  // buscarPrestador: (req, res) => {
  //   let resultadoPrestadores = Busca.buscarPrestador();
  //   res.render("busca", { resultadoPrestadores });
  //   console.log(typeof resultadoPrestadores);
  // },
  // };

  //TESTE TEMP
  buscarPrestador: (req, res) => {
    let resultadoPrestadores = listaTemp;
    res.render("busca", { resultadoPrestadores });
  },
};

module.exports = buscaController;
