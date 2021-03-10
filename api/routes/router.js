const { Router } = require('express');
const {name, version} = require('../../package.json');

const tarefaRoutesV1 = require('./v1/tarefa')

module.exports = (app) => {
    const router = Router();

    router.route('/').get((req, res) => {
        res.send({name, version});
    });

    tarefaRoutesV1(router);]
        
    app.use('/v1', router);
 }