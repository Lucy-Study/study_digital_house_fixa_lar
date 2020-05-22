'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        logradouro: Sequelize.STRING,
        cep: Sequelize.STRING,
        complemento: Sequelize.STRING,
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('users');
   
  }
};
