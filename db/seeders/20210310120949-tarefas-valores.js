'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Tarefas', [
       {titulo: 'John Doe1', data_inicio: new Date(), data_fim: new Date(), usuario_id: 1},
       {titulo: 'John Doe2', data_inicio: new Date(), data_fim: new Date(), usuario_id: 2},
       {titulo: 'John Doe3', data_inicio: new Date(), data_fim: new Date(), usuario_id: 3},
       {titulo: 'John Doe4', data_inicio: new Date(), data_fim: new Date(), usuario_id: 4},
       {titulo: 'John Doe5', data_inicio: new Date(), data_fim: new Date(), usuario_id: 5},
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
