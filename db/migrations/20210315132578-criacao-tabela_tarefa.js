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
      
      descricao: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      data_fim: {
        allowNull: false,
        type: Sequelize.DATE
      },

      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE',
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('tarefas');
  }
};
