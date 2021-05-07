const Joi = require('joi');
const jwt = require('jsonwebtoken');
const usuarioService = require('../services/usuario-service')

const perfis = [
  {
    id: '1',
    funcionalidades: [
      'LISTAR_TAREFAS',
      'CRIACAO_TAREFA',
      'ALTERACAO_TAREFA',
      'LISTAR_USUARIOS',
      'GET_USUARIO'
    ]
  },
  {
    id: '2',
    funcionalidades: [
      'ALTERACAO_ALUNO',
    ]
  },
];

const buscarPefilPorId = (perfilId) => {
  const result = perfis.find(item => Number(item.id) === Number(perfilId));
  return result;
}


const criarDetalhes = (error) => {

  return error.details.reduce((acc, item) => {

    console.log(acc);

    console.log(item);

    return [
      ...acc, item.message
    ];

  }, []);

}

exports.validarDTO = (type, params) => {

  return (req, res, next) => {

    try {
      const schema = Joi.object().keys(params);

      const { value, error } = schema.validate(req[type], {
        allowUnknown: false,
      });

      req[type] = value;

      return error ? res.status(422).send({
        detalhes: [...criarDetalhes(error)],
      }) : next();

    } catch (error) {

      console.log(error);

    }

  }

}

exports.autorizar = (rota = '*') => {

  return async (req, res, next) => {

    const { token } = req.headers;

    try {

      if (!token) {
        return res.status(403).send({
          mensagem: "usuário não autorizado."
        })
      }

      const userJwt = jwt.verify(token, process.env.JWT_KEY);

      const usuario = await usuarioService.buscarPorEmail(userJwt.email);
      req.usuario = usuario;

      if (rota !== '*') {

        const perfil = buscarPefilPorId(usuario.tipo);
        if (!perfil.funcionalidades.includes(rota)) {
          return res.status(403).send({
            mensagem: "usuário não autorizado."
          });
        }

      }

      next();

    } catch (error) {

      console.log(`Token Error: ${error}`);

      return res
        .status(401)
        .send({ mensagem: "Usuário não autenticado."});
    }
  }
}