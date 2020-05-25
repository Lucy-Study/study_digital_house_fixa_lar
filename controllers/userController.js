const { User } = require("../models");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize")
const config = require("../config/database");

module.exports = {
  // display view register with form
  create: (_req, res) => res.render("auth/register"),

  // store user in db, v1
  store: async (req, res) => {
    const connection = new Sequelize(config);
    const {
      name,
      email,
      cpf,
      phone,
      password,
      address,
      cep,
      complemento,
      city,
      state,
      zone,
    } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log('from userController: ', name, email, cpf, phone, password, address, cep, complemento, city, state, zone);
    return res.redirect("/users/register")
  },

}