'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      }  
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
