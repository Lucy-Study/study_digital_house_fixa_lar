module.exports = (sequelize, DataType) => {
  const Zona = sequelize.define(
    "Zona",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataType.STRING(30),
    },

    {
      tableName: "zonas",
      timestamps: false,
    }
  );

  Zona.associate = (pastaModels) => {
    Zona.hasMany(pastaModels.Prestador, {
      foreignKey: "zonas_id",
    });

    //RELACIONAMENTO DE ZONA COM PRESTADOR M x N.
    Zona.belongsToMany(pastaModels.Prestador, {
      through: "PrestadorZona",
      foreignKey: "zonas_id",
      as: "prestadores_zonas",
    });
  };

  return Zona;
};
