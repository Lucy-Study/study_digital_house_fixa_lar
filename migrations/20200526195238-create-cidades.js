'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cidades', {
           id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
            }, 
            city: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
          });
     },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cidades');
  }
};
