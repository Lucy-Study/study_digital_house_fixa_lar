module.exports = (sequelize, DataType) => {
    const Bairro = sequelize.define(
      "Bairro",
      {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        nome: DataType.STRING(150),
        zonas_id:DataType.INTEGER,
      },

      {
        tableName: "bairros",
        timestamps: false,
      }
    );
  
    Bairro.associate = (pastaModels) => {
      Bairro.belongsTo(pastaModels.Zona, {
        foreignKey: "zonas_id"
      });
      
      Bairro.hasMany(pastaModels.Prestador, {
        foreignKey: "bairros_id"
      });
    };
  
    return Bairros;
  };
  