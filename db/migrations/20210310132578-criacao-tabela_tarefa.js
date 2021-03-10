'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATE
      }  
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarefas');
  }
};
