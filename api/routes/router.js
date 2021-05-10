const { Router } = require('express');
const {name, version} = require('../../package.json');

const usuarioRoutesV2 = require('../routes/v2/usuario')
const tarefaRoutesV2 = require('../routes/v2/tarefa')

module.exports = (app) => {
    const router = Router();

    router.route('/').get((req, res) => {
        res.send({name, version});
    });

    usuarioRoutesV2(router);
    tarefaRoutesV2(router);
    
    app.use('/v2', router);
 }