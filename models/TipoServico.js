module.exports = (sequelize, DataType) => {
    const TipoServico = sequelize.define(
      "TipoServico",
      {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        nome: DataType.STRING,
      },

      {
        tableName: "tipo_servicos",
        timestamps: false,
      }
    );

    TipoServico.associate = (pastaModels) => {
      TipoServico.hasMany(pastaModels.Servico, {
        foreignKey: 'tipo_servicos_id',
      });
    };

    return TipoServico;
  };
  