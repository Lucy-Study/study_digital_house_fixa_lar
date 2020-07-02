const { User } = require("../models")
const Sequelize = require('sequelize');
const config = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
  index: async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email }
    })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.render("admin/adminLogin", { error: "Por favor verifique, email ou senha inválidos"});
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }

    res.render("admin/adminIndex", { user })
  },

  login: (_req, res) => res.render("admin/adminLogin"),

  store: (req, res) => res.json({ message: "hi from adminController store"})
}