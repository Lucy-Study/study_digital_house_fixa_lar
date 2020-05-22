module.exports = (sequelize, DataType) => {
    const Estado = sequelize.define(
      "Estado",
      {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        nome: DataType.STRING,
      },

      {
        tableName: "estados",
        timestamps: false,
      }
    );
  
    Estado.associate = (pastaModels) => {
      Estado.hasMany(pastaModels.Cidade, {
        foreignKey: "estados_id"
      });
    };
  
    return Estado;
  };
  