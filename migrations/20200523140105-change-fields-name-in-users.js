'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'address', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('users', 'city', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('users', 'password', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
      ]);
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'logradouro'),
        queryInterface.removeColumn('users', 'senha')
      ]);
    });
  }
};
