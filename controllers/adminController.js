const Sequelize = require('sequelize');
const config = require("../config/database");

module.exports = {
  login: (_req, res) => res.render("admin/adminLogin"),

  store: (req, res) => res.json({ message: "hi from adminController store"})
}