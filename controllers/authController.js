const { User } = require("../models");
const Sequelize = require("sequelize")
const config = require("../config/database");
const bcrypt = require("bcrypt");

const authController = {
  create: (_req, res) => {
    return res.render("/#login");
  },
  store: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      }
    })
    
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.render("index", {
        message: "Email ou senha errados!",
       });
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    
    return res.redirect("/busca");
    
  },

  destroy: (req, res) => {
    req.session = undefined;
    return res.redirect("/",);
  },
};

module.exports = authController;