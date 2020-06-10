module.exports = (sequelize, DataType) => {
    const Cidade = sequelize.define(
      "Cidade",
      {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        nome: DataType.STRING,
        estados_id:DataType.INTEGER,
      },

      {
        tableName: "cidades",
        timestamps: false,
      }
    );
  
    Cidade.associate = (pastaModels) => {
      Cidade.belongsTo(pastaModels.Estado, {
        foreignKey: "estados_id"
      });
      
      Cidade.hasMany(pastaModels.Prestador, {
        foreignKey: "cidades_id"
      });
    };
  
    return Cidade;
  };
  