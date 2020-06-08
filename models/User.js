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
        type:DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.STRING,
      cep: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      complemento: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users"
    }
  );

  return User;
}


