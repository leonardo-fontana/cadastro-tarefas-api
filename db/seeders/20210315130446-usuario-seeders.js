'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
    {nome: 'John Doe1', email: "fulano@ciclano.com"},
    {nome: 'John Doe2', email: "fulano@ciclano.com"},
    {nome: 'John Doe3', email: "fulano@ciclano.com"},
    {nome: 'John Doe4', email: "fulano@ciclano.com"},
    {nome: 'John Doe5', email: "fulano@ciclano.com"},
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
