'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Tarefas', [
       {titulo: 'Arrumar a cama', descricao: 'Lorem ipsum Dolor sit amet', data_inicio: new Date(), data_fim: new Date(), usuario_id: 1},
       {titulo: 'Comer cereal', descricao: 'Lorem ipsum Dolor sit amet', data_inicio: new Date(), data_fim: new Date(), usuario_id: 2},
       {titulo: 'Fazer exercicios', descricao: 'Lorem ipsum Dolor sit amet', data_inicio: new Date(), data_fim: new Date(), usuario_id: 3},
       {titulo: 'Xingar o código', descricao: 'Lorem ipsum Dolor sit amet', data_inicio: new Date(), data_fim: new Date(), usuario_id: 4},
       {titulo: 'Lavar a louça', descricao: 'Lorem ipsum Dolor sit amet', data_inicio: new Date(), data_fim: new Date(), usuario_id: 5},
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
