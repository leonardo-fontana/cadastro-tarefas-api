const { Router } = require('express');
const {name, version} = require('../../package.json');

const tarefaRoutesV1 = require('../routes/v1/tarefa')
const usuarioRoutesV1 = require('../routes/v1/usuario')

module.exports = (app) => {
    const router = Router();

    router.route('/').get((req, res) => {
        res.send({name, version});
    });

    tarefaRoutesV1(router);
    usuarioRoutesV1(router);
        
    app.use('/v1', router);
 }