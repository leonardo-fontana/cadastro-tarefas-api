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
          titulo: item.titulo
        }

      }));

    })
}

const getTarefa = (req, res, next) => {]
    /*res.status(200).send([
        {
            id: 1,
            name: 'teste mock'
        }
    ])*/
}

module.exports = {
    getAllTarefas,
    getTarefa
}