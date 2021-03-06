const usuarioController = require('../../controllers/usuario-controller');
const { validarDTO, autorizar } = require('../../utils/middleware-utils');

const Joi = require('joi').extend(require('@joi/date'));

module.exports = (router) => {

  //Autenticacao
  router.route('/auth').post(
    validarDTO('body', {
      senha: Joi.string().required().messages({
        'any.required': `"Senha" é um campo obrigatório`,
        'string.empty': `"Senha" não deve ser vazio`,
        // 'string.min': `"nome" não deve ter menos que {#limit} caracteres`,
      }),
      usuario: Joi.string().required().messages({
        'any.required': `"Email" é um campo obrigatório`,
        'string.empty': `"Email" não deve ser vazio`,
        }),
    }),

    usuarioController.autenticar
  );
    
  //getAllUsuarios
  router.route('/usuario').get(
      autorizar('LISTAR_USUARIOS'),
      usuarioController.getAllUsuarios
  );

  router.route('/usuario/:id').get(
    autorizar('GET_USUARIO'),
    usuarioController.getUsuarioById
  );

  //create
  router.route('/usuario').post(
    validarDTO('body', {
      nome: Joi.string().min(5).max(30).required()
        .messages({
          'any.required': `"Nome" é um campo obrigatório`,
          'string.empty': `"Nome" não deve ser vazio`,
          'string.min': `"Nome" não deve ter menos que {#limit} caracteres`,
          'string.max': `"Nome" não deve ter mais que {#limit} caracteres`,
        }),
      email: Joi.string().email().required().messages({
        'any.required': `"Email" é um campo obrigatório`,
        'string.empty': `"Email" não deve ser vazio`,
        'string.email': `"Email" deve ser um email válido`,
      }),
      senha: Joi.string().required().min(6).max(16)
        .messages({
          'any.required': `"Senha" é um campo obrigatório`,
          'string.empty': `"Senha" não deve ser vazio`,
          'string.min': `"Senha" não deve ter menos que {#limit} caracteres`,
          'string.max': `"Senha" não deve ter mais que {#limit} caracteres`,
        })
      }),
      usuarioController.createUsuario
    );

    //put
    router.route('/usuario/:id').put(
      autorizar('ALTERACAO_USUARIO'),
      validarDTO('params', {
        id: Joi.number().integer().required().messages({
          'any.required': `"id" é um campo obrigatório`,
          'number.base': `"id" deve ser um número`,
          'number.integer': `"id" deve ser um número válido`
        })
      }),
      validarDTO('body', {
        nome: Joi.string().min(5).max(30).required()
          .messages({
            'any.required': `"nome" é um campo obrigatório`,
            'string.empty': `"nome" não deve ser vazio`,
            'string.min': `"nome" não deve ter menos que {#limit} caracteres`,
            'string.max': `"nome" não deve ter mais que {#limit} caracteres`,
          }),
        email: Joi.string().email().required().messages({
          'any.required': `"email" é um campo obrigatório`,
          'string.empty': `"email" não deve ser vazio`,
          'string.email': `"email" deve ser um email válido`,
        }),
      }),
      usuarioController.updateUsuario
    )
}
