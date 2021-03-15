const db = require('../models/index');

const getMockTarefas = (req, res, next) => {

   res.status(200).send([
        {
            id: 1,
            titulo: 'teste mock',
            data_inicio: '01/01/2020',
            data_fim: '01/01/2020'
        }
    ])
}

const getAllTarefas = (req, res, next) => {
    db.tarefa.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {

        return {
          id: item.id,
          titulo: item.titulo,
          data_inicio: item.data_inicio,
          data_fim: item.data_fim
        }
      }));

    })
}

const getTarefaById = (req, res) => {
    db.tarefa.findOne({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      res.status(200).send(result);

    })
}

module.exports = {
    getMockTarefas,
    getAllTarefas,
    getTarefaById
}