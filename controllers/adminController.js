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
      return res.render("admin/adminLogin", { message: "Por favor verifique, email ou senha inválidos"});
    }

    

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }

    return res.redirect("/admin/index");
  },

  show: async(req, res) => {
   const user = req.session.user;
   const users = await User.findAll({ raw: true });
   return res.render("admin/adminIndex", { user, users } );
  },

  login: (_req, res) => res.render("admin/adminLogin"),
  cadastro: (_req, res) => res.render("admin/adminCadastro"),

  delete: async(req, res) => {
    const { id } = req.params;
    const userId = await User.findOne({
      where: { id }
    });

    User.destroy({
      where: {
        id,
      }
    });

    const users = await User.findAll({ raw: true });
    user = req.session.user;
    
    return res.redirect("/admin/index")
  },

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
      role
    } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    
    const isUserExist = await User.findOne({
      where: {
        cpf,
      }
    });

    if (!!isUserExist) {
      return res.render("admin/adminCadastro", {
        message: "Usuário já cadastrado."
      })
    }

    const userRegisterData = {
      name,
      email,
      cpf,
      phone,
      password: hashPassword,
      address,
      cep,
      complemento,
      city,
      state,
      zone,
      created_at: new Date(),
      updated_at: new Date(),
      role: role.toUpperCase(),
    };
    
    return  User.create(userRegisterData)
                .then(users => {
                  if(users) {
                    res.redirect("/index")
                  } else {
                    res.status(400).render("admin/adminCadastro", {
                      message: "Erro ao cadastrar usuário."
                    })
                  }
                })
  },

  updateForm: async(req, res) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      raw: true,
    });
    res.render("admin/adminUpdateForm", { user })
  },
  update: async(req, res) => {


    await User.update({ lastName: "Doe" }, {
      where: {
        lastName: null
      }
    });
    res.json({messa: 'hi from update'})
  },
}