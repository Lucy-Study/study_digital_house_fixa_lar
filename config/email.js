const nodemailer = require("nodemailer");

const email = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fixalar.projeto@gmail.com",
    pass: "Projeto#digital2",
  },
});

module.exports = email;
