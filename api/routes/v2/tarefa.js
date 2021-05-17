const tarefasController = require('../../controllers/tarefa-controller')
const { autorizar, validarDTO } = require('../../utils/middleware-utils');
const Joi = require('joi').extend(require('@joi/date'));

module.exports = (router) => {
    router.route('/tarefa').get
    (
        autorizar('LISTAR_TAREFAS'),
        tarefasController.getAllTarefas
    )

    router.route('/tarefa/usuario/:id_usuario').get
    (
        autorizar('LISTAR_TAREFAS_USUARIO'),
        validarDTO('params', {
            id_usuario: Joi.number().integer().required().messages({
              'any.required': `"id" é um campo obrigatório`,
              'number.base': `"id" deve ser um número`,
              'number.integer': `"id" deve ser um número válido`
            })
          }),
        tarefasController.getAllTarefasFromUsuario
    )

    router.route('/tarefa/:id').get
    (
        autorizar('GET_TAREFA_BY_ID'),
        validarDTO('params', {
            id: Joi.number().integer().required().messages({
              'any.required': `"id" é um campo obrigatório`,
              'number.base': `"id" deve ser um número`,
              'number.integer': `"id" deve ser um número válido`
            })
          }),
        tarefasController.getTarefaById
    )

    router.route('/tarefa').post
    (
        autorizar('CRIACAO_TAREFA'),
        validarDTO('body', {
            titulo: Joi.required(),
            descricao: Joi.required(),
            data_fim: Joi
          //.date().format('DD/MM/YYYY')
          .required(),
          data_inicio: Joi
          //.date().format('DD/MM/YYYY')
          .required(),
        }),
        tarefasController.createTarefa
    )

    router.route('/tarefa/:id').put
    (
        autorizar('ATUALIZAR_TAREFA'),
        validarDTO('params', {
            id: Joi.number().integer().required().messages({
              'any.required': `"id" é um campo obrigatório`,
              'number.base': `"id" deve ser um número`,
              'number.integer': `"id" deve ser um número válido`
            })
          }),
        tarefasController.updateTarefa
    )

    router.route('/tarefa/:id').delete
    (
        autorizar('DELETAR_TAREFA'),
        validarDTO('params', {
            id: Joi.number().integer().required().messages({
              'any.required': `"id" é um campo obrigatório`,
              'number.base': `"id" deve ser um número`,
              'number.integer': `"id" deve ser um número válido`
            })
        }),
        tarefasController.deleteTarefa
    )
}