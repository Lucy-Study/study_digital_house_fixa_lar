'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
// prosseguir com add foreignKey in cidades point to estados 26/05/2020