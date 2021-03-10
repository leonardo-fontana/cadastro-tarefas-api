const db = require('../models/index');

const getAllTarefas= (req, res, next) => {

    /*res.status(200).send([
        {
            id: 1,
            name: 'teste mock'
        }
    ])*/

    db.tarefa.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {

        return {
          id: item.id,
          titulo: item.titulo,
          data_inicio: item.data_inicio
        }

      }));

    })
}

const getTarefaById = (req, res) => {
    db.tarefa.findByPk(req.params.id)
     .then((result) => {
      res.status(200).send({});

    })
}

module.exports = {
    getAllTarefas,
    getTarefaById
}