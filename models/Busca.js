const fs = require("fs");
const path = require("path");

const arquivoPrestador = path.join("tempArquivoPrestador.json");

function listarPrestador() {
  let listaDePrestadores = JSON.parse(fs.readFileSync(arquivoPrestador, { encoding: "utf-8" }));
  return listaDePrestadores;
}

function buscarPrestador(posicao) {
  let listaDePrestadores = JSON.parse(fs.readFileSync(arquivoPrestador, { encoding: "utf-8" }));
  return listaDePrestadores[posicao];
}

module.exports = { listarPrestador, buscarPrestador };
