module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      senha: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      logradouro: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      cep: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      complemento: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users"
    }
  );

  return User;
}

