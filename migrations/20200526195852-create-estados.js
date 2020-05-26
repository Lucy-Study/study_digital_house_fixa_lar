'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('estados', {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
          },
          estado: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('estados');
  }
};
