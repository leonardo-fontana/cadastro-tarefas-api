'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
    {nome: 'Fulano', email: "fulano@ciclano.com",tipo: "1", senha: "123456"},
    {nome: 'Klein',  email: "klein@ciclano.com",tipo: "2", senha: "123456"},

    ], {})
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
