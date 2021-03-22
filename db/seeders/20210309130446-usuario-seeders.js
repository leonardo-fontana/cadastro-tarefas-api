'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
    {nome: 'Fulano', sobrenome: "De tal",  email: "fulano@ciclano.com"},
    {nome: 'Klein', sobrenome: "Moretti", sobrenome: "De tal", email: "fulano@ciclano.com"},
    {nome: 'Fang', sobrenome: "Yuan", email: "fulano@ciclano.com"},
    {nome: 'Lorem', sobrenome: "Ipsum" ,email: "fulano@ciclano.com"},
    {nome: 'Cevin',sobrenome: "Comce" , email: "fulano@ciclano.com"},
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
