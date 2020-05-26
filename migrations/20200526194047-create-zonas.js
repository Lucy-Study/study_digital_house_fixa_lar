'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('zonas', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        zone: {
          type: Sequelize.STRING,
          alloNull: false,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('zonas');

  }
};
