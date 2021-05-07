const { Router } = require('express');
const {name, version} = require('../../package.json');

//const tarefaRoutesV1 = require('../routes/v1/tarefa')
//const usuarioRoutesV1 = require('../routes/v1/usuario')
const usuarioRoutesV2 = require('../routes/v2/usuario')
const tarefaRoutesV2 = require('../routes/v2/tarefa')

module.exports = (app) => {
    const router = Router();

    router.route('/').get((req, res) => {
        res.send({name, version});
    });

    //tarefaRoutesV1(router);
    //usuarioRoutesV1(router);
    usuarioRoutesV2(router);
    tarefaRoutesV2(router);
    
    app.use('/v2', router);
 }