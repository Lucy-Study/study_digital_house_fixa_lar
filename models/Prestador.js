module.exports = (sequelize, DataType) => {
  const Prestador = sequelize.define(
    "Prestador",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: DataType.INTEGER,
        unique: true,
      },
      nome: DataType.STRING(200),
      bio: {
        type: DataType.STRING,
        allowNull: true,
      },
      genero: DataType.STRING,
      contato: DataType.STRING,
      email: DataType.STRING(200),
      logradouro: DataType.STRING(300),
      cep: DataType.STRING(15),
      complemento: {
        type: DataType.STRING(300),
        allowNull: true,
      },
      senha: DataType.STRING(300),
      zonas_id: DataType.INTEGER,
      cidades_id: DataType.INTEGER,
      bairros_id: DataType.INTEGER,
      foto: {
        type: DataType.STRING,
        defaultValue: "perfil212x200.png",
      },
    },
    {
      tableName: "prestadores",
      timestamps: false,
    }
  );

  Prestador.associate = (pastaModels) => {
    Prestador.belongsTo(pastaModels.Zona, {
      foreignKey: "zonas_id",
    });

    Prestador.belongsTo(pastaModels.Cidade, {
      foreignKey: "cidades_id",
    });

    Prestador.belongsTo(pastaModels.Bairro, {
      foreignKey: "bairros_id",
    });

    //RELACIONAMENTO DE ZONA COM PRESTADOR M x N.
    Prestador.belongsToMany(pastaModels.Zona, {
      through: "PrestadorZona",
      foreignKey: "prestadores_id",
      as: "prestadores_zonas",
    });

    //RELACIONAMENTO DE SERVICO COM PRESTADOR M x N.
    Prestador.belongsToMany(pastaModels.Servico, {
      through: "PrestadorServico",
      foreignKey: "prestadores_id",
    });
  };

  return Prestador;
};
