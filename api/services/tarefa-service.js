const jwt = require('jsonwebtoken');
const { tarefas, usuarios } = require("../models");

const getAllTarefas = async () => {

  const resultadoDB = await tarefas.findAll({})

  return resultadoDB.map(item => {

    const { id, titulo,descricao, data_inicio, data_fim, usuario_id } = item;

    return {
      id,
      titulo,
      descricao,
      data_inicio,
      data_fim,
      usuario_id
    }
  });
}

const getAllTarefasFromUser = async () => {
    const result = await tarefas.findAll({});
    const {token} = req.headers;
    var decode1 = jwt.decode(token);
    console.log(decode1)
    const resultadoDB = await tarefas.findAll({})
  
    return resultadoDB.map(item => {
  
      const { id, titulo,descricao, data_inicio, data_fim, usuario_id } = item;
  
      return {
        id,
        titulo,
        descricao,
        data_inicio,
        data_fim,
        usuario_id
      }
    });
  }

const getTarefaById = async (idTarefa) => {

  const itemDB = await tarefas.findOne({
    where: {
      id: idTarefa
    },
    include: {
        model: usuarios,
        as: 'usuarios',
      },
  });

  const { id, titulo,descricao,data_inicio,data_fim,usuario_id } = itemDB;

  return {
    id,
    titulo,
    descricao,
    data_inicio,
    data_fim,
    usuario_id,
    usuarios
  }

}

const createTarefa = async (model) => {

    const tarefaModel = {
      titulo: model.titulo,
      descricao: model.descricao,
      data_inicio: model.data_fim,
      data_fim: model.data_fim,
      usuario_id: model.usuario_id
    };
  
    return tarefas.create(tarefaModel);
}

module.exports = {
  getAllTarefasFromUser,
  getAllTarefas,
  getTarefaById,
  createTarefa
}
