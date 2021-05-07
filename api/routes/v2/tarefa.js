const tarefasController = require('../../controllers/tarefa-controller')
const { autorizar, validarDTO } = require('../../utils/middleware-utils');
const Joi = require('joi').extend(require('@joi/date'));

module.exports = (router) => {
    router.route('/tarefa').get
    (
        autorizar('LISTAR_TAREFAS'),
        tarefasController.getAllTarefas
    )

    router.route('/tarefa/:id').get
    (
        autorizar(),
        tarefasController.getTarefaById
    )

    router.route('/tarefa').post
    (
        autorizar('CRIACAO_TAREFA'),
        validarDTO('body', {
            titulo: Joi.required(),
            descricao: Joi.required(),
            data_fim: Joi
          .date().format('DD/MM/YYYY')
          .required(),
          data_inicio: Joi
          .date().format('DD/MM/YYYY')
          .required(),
        }),
        tarefasController.createTarefa
    )

    router.route('/tarefa/:id').put
    (
        autorizar(),
        tarefasController.updateTarefa
    )

    router.route('/tarefa/:id').delete
    (
        autorizar(),
        tarefasController.deleteTarefa
    )

    router.route('/mockTarefa').get 
    (
        tarefasController.getMockTarefas
    )
}