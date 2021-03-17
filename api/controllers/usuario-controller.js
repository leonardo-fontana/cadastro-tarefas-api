const db = require('../models/index');

const getMockUsuario= (req, res, next) => {

   res.status(200).send([
        {
            id: 1,
            nome: 'Fulano de Tal',
            email: 'fulano@ciclano.com'
        }
    ])
}

const getAllUsuarios = (req, res, next) => {

    db.usuarios.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {

        return {
          id: item.id,
          nome: item.nome,
          email: item.email
        }
      }));

    })
}

const getUsuarioById = (req, res) => {
    db.usuario.findOne({
        where: {
          id: req.params.id
        }
      }).then((result) => {
        res.status(200).send(result);
  
      })
}

module.exports = {
    getMockUsuario,
    getAllUsuarios,
    getUsuarioById
}