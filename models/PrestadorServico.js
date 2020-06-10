module.exports = (sequelize, DataType) => {
    const PrestadorServico = sequelize.define(
      "PrestadorServico",
      {
        prestadores_id: {
          type: DataType.INTEGER,
          references: {
              model: 'Prestador',
              key: 'id',
          }
        }, 
        servicos_id: {
            type: DataType.INTEGER,
            references: {
                model: 'Servico',
                key: 'id',
            }
          },
      },
      {
        tableName: "prestadores_servicos",
        timestamps: false,
      }
    );
  
    return PrestadorServico;
  };
  