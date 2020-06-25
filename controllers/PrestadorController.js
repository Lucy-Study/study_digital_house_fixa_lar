const {Bairro, Estado, Cidade, Zona, Prestador, PrestadorZona, PrestadorServico, Servico, TipoServico} = require("../models");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize")
const config = require("../config/database");

const PrestadorController = {

    login: async(req, res) => {
        
        const {prestador_email, prestador_password=''} = req.body;

        const prestador = await Prestador.findOne({
            where: { email: prestador_email }
        });

        const confirmacao = prestador ? await bcrypt.compare(prestador_password, prestador.senha) : '';

        if (!prestador || !confirmacao) {
            console.log("Erro: Usuário ou senha inválidos.");
            return res.render('index');
        }

        req.session.prestador = {
            id: prestador.id,
            nome: prestador.nome,
            email: prestador.email
        }

        return res.redirect(`/prestador/${prestador.id}/admin`);

    },

    mostrar: async(req, res) => {

        const estados = await Estado.findAll({
            include: {
                model: Cidade,
                required: true
            }
        });
    
        const zonas = await Zona.findAll();

        if (!estados || !zonas) {
            return res.render('/', {
                alert: {
                    message: "Ocorreu um erro, tente novamente!",
                    type: "danger"
                }
            });
        }

        return res.render("cadastroPrestador", {estados, zonas});

    },

    cadastro: async (req, res) => {
        const connection = new Sequelize(config);
        const {
            cpf, nome, genero, email, contato, logradouro, cep, complemento, zona, cidade, estado, senha, chkZonaNorte, chkZonaLeste, chkZonaCentral, chkZonaOeste, chkZonaSul, chkLuminaria, chkTomadas, chkInterruptor, chkDisjuntor, chkTrocaLampada, chkVentilador, chkReator, chkLustre, chkTorneira, chkTanqRoupa, chkCxAcoplada, chkSifao, chkRegAgua, chkValHydra, chkDobradica, chkAlinhaPortasGavetas, chkTrilhosGavetas, chkMoveis, chkSuportTv, chkCortina, chkMangFogao, chkVaralTeto
        } = req.body;

        const hashPassword = bcrypt.hashSync(senha, 10);

        let transaction = await connection.transaction();

        try {
       const prestador = await Prestador.create({
            cpf,
            nome,
            genero,
            email,
            contato,
            logradouro,
            cep,
            complemento,
            senha: hashPassword,
            zonas_id: zona,
            cidades_id: cidade
        }, {transaction});

        /* Preenche o prestadores_zonas */

        if (chkZonaNorte) {
            await PrestadorZona.create({
                prestadores_id: prestador.id,
                zonas_id: chkZonaNorte
            }, {transaction});
        }

        if (chkZonaLeste) {
            await PrestadorZona.create({
                prestadores_id: prestador.id,
                zonas_id: chkZonaLeste
            }, {transaction});
        }

        if (chkZonaCentral) {
            await PrestadorZona.create({
                prestadores_id: prestador.id,
                zonas_id: chkZonaCentral
            }, {transaction});
        }

        if (chkZonaOeste) {
            await PrestadorZona.create({
                prestadores_id: prestador.id,
                zonas_id: chkZonaOeste
            }, {transaction});
        }

        if (chkZonaSul) {
            await PrestadorZona.create({
                prestadores_id: prestador.id,
                zonas_id: chkZonaSul
            }, {transaction});
        }

        /*fim do Preenche o prestadores_zonas */
    /* Preenche prestadores_servicos */
    if (chkLuminaria) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkLuminaria
        }, {transaction});
    }

    if (chkTomadas) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkTomadas
        }, {transaction});
    }
    
    if (chkInterruptor) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkInterruptor
        }, {transaction});
    }
    if (chkDisjuntor) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkDisjuntor
        }, {transaction});
    }
    if (chkTrocaLampada) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkTrocaLampada
        }, {transaction});
    }
    if (chkVentilador) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkVentilador
        }, {transaction});
    }

    if (chkReator) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkReator
        }, {transaction});
    }

    if (chkLustre) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkLustre
        }, {transaction});
    }

    if (chkTorneira) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkTorneira
        }, {transaction});
    }

    if (chkTanqRoupa) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkTanqRoupa
        }, {transaction});
    }

    if (chkCxAcoplada) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkCxAcoplada
        }, {transaction});
    }

    if (chkSifao) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkSifao
        }, {transaction});
    }

    if (chkRegAgua) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkRegAgua
        }, {transaction});
    }

    if (chkValHydra) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkValHydra
        }, {transaction});
    }

    if (chkDobradica) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkDobradica
        }, {transaction});
    }

    if (chkAlinhaPortasGavetas) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkAlinhaPortasGavetas
        }, {transaction});
    }

    if (chkTrilhosGavetas) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkTrilhosGavetas
        }, {transaction});
    }

    if (chkMoveis) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkMoveis
        }, {transaction});
    }

    if (chkSuportTv) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkSuportTv
        }, {transaction});
    }
    if (chkCortina) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkCortina
        }, {transaction});
    }

    if (chkMangFogao) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkMangFogao
        }, {transaction});
    }
    if (chkVaralTeto) {
        await PrestadorServico.create({
            prestadores_id: prestador.id,
            servicos_id: chkVaralTeto
        }, {transaction});
    }
    await transaction.commit();
        return res.redirect("/");
    } catch(error) {
        await transaction.rollback();
        console.log(error);
    }
}, 
    admin: async(req, res) => {

        const { id } = req.params;

        const estados = await Estado.findAll({
            include: {
                model: Cidade,
                require: true
            }
        });
        const zonas = await Zona.findAll();

        const tipo_servicos = await TipoServico.findAll({
            include: {
                model: Servico,
                require: true
            }
        });

        if (!estados || !zonas) {
            return res.render('/', {
                alert: {
                    message: "Ocorreu um erro, tente novamente!",
                    type: "danger"
                }
            });
        }

        const prestador = await Prestador.findByPk(id, {
            include: [
                {
                    model: Zona,
                    require: true
                },
                {
                    model: Cidade,
                    require: true,
                    include: {
                        model: Estado,
                        require: true
                    }
                },
                {
                    model: Servico,
                    include: {
                        model: TipoServico,
                        require: true
                    },
                    require: false
                },
                {
                    model: Zona,
                    as: "prestadores_zonas",
                    require: false
                }
            ]
        });

        if (!prestador) {
            return res.render('/', {
                alert: {
                    message: "Usuário inválido!",
                    type: "danger"
                }
            });
        }

        return res.render("admPrestador", {estados, zonas, prestador, tipo_servicos});

    }, 
    put: async (req, res) => {
        const connection = new Sequelize(config);
        const { ...data } = req.body;
        const { id } = req.params;

        
        let [file] = req.files;

        const prestador = await Prestador.findByPk(id);

        /*  Senha */
         if (data.new_senha !== '') {
            const new_senha = await bcrypt.hash(data.new_senha, 10);
            const senha_confirm = await bcrypt.compare(data.old_senha, prestador.senha);
            const new_confirm_senha = await bcrypt.compare(data.confirm_new_senha, new_senha);

            if (!senha_confirm || !new_confirm_senha) {
                return res.redirect(`/prestador/${id}/admin`);
            }

            let transaction_senha = await connection.transaction();
            try {
                await Prestador.update({
                    senha: new_senha
                },{
                    where: {id},
                    transaction_senha
                });
                await transaction_senha.commit();
            } catch(error) {
                await transaction_senha.rollback();
                console.log(error);
                res.render('/');
            }
        }
        /*  fim da Senha*/

        /* Imagem */
        if (typeof(file) == 'undefined') {
            foto = prestador.foto;
        } else {
            foto = file.filename;
        }
        await Prestador.update({
            foto
        }, {
            where: {id}
        });

        /* fim da Imagem */

        /* Dados do Prestador */
        let transaction = await connection.transaction();
        try {
            await Prestador.update({
                nome: data.nome,
                genero: data.genero,
                email: data.email,
                logradouro: data.logradouro,
                cep: data.cep,
                complemento: data.complemento,
                contato: data.contato,
                zonas_id: data.zona,
                cidades_id: data.cidade
            }, {
                where: {id}
            }, transaction);
        await transaction.commit();
        return res.redirect(`/prestador/${id}/admin`);
        } catch(error) {
            await transaction.rollback();
            console.log(error);
            res.render('/');
        }
        /* fim Dados do Prestador */


    } 

}

module.exports = PrestadorController;