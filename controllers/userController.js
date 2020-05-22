const { User } = require("../models");
const bcrypt = require('bcrypt');

const userController = {
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
    } = req.params;
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(name);
  },

}