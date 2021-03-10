'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Tarefas', [
       {titulo: 'John Doe', data_inicio: Date.now()},
       {titulo: 'John Doe2', data_inicio: Date.now()},
       {titulo: 'John Doe3', data_inicio: Date.now()},
       {titulo: 'John Doe4', data_inicio: Date.now()},
       {titulo: 'John Doe5', data_inicio: Date.now()},
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
