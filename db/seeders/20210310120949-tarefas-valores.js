'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Tarefas', [
       {titulo: 'John Doe1', data_inicio: Date.now(), data_fim: Date.now()},
       {titulo: 'John Doe2', data_inicio: Date.now(), data_fim: Date.now()},
       {titulo: 'John Doe3', data_inicio: Date.now(), data_fim: Date.now()},
       {titulo: 'John Doe4', data_inicio: Date.now(), data_fim: Date.now()},
       {titulo: 'John Doe5', data_inicio: Date.now(), data_fim: Date.now()},
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
