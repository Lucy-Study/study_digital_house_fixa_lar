const { Contato, Newsletter } = require('../models')
const {check, validationResult, body} = require('express-validator');

const indexController = {


    enviarNewsletter: async (req, res) => {
        
        const {email} = req.body;

        try {
            const emailCadastrado = await Newsletter.findOne({
                where: {
                    email
                }
            })
    
            if (emailCadastrado !== null) {
                emailCadastrado.ativo = true;
                await emailCadastrado.save();
            } else {
                const dadosNewsletter = await Newsletter.create({
                    email,
                    ativo: true
                })
            }
            return res.status(201).json({
                mensagem: "Email cadastrado"
            });

        } catch {
            return res.status(400).json();
        }

    }
}

module.exports = indexController