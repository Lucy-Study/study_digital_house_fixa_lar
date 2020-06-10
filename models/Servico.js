module.exports = (sequelize, DataType) => {
    const Servico = sequelize.define(
      "Servico",
      {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        nome: DataType.STRING,
        tipo_servicos_id: DataType.INTEGER
      },

      {
        tableName: "servicos",
        timestamps: false,
      }
    );

    Servico.associate = (pastaModels) => {
      //RELACIONAMENTO DE ZONA COM PRESTADOR M x N.
      Servico.belongsToMany(pastaModels.Prestador,{
        through: 'PrestadorServico',
        foreignKey: 'servicos_id',
      });
      Servico.belongsTo(pastaModels.TipoServico, {
        foreignKey: 'tipo_servicos_id',
      });
    };

    return Servico;
  };
  