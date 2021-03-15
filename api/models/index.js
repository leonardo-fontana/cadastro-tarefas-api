const config = require(__dirname + '/../../db/config.js');
const Sequelize = require('sequelize');

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {

  sequelize = new Sequelize(config.database, config.username, config.password, config);

}

const modelTarefa = require('./tarefa');
const modelUsuario = require('./usuario');

db.tarefa = modelTarefa(sequelize, Sequelize.DataTypes);
db.usuario = modelUsuario(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
