const tarefasController = require('../../controllers/tarefa-controller')

module.exports = (router) => {
    router.route('/tarefa').get
    (
        tarefasController.getAllTarefas
    )

    router.route('/tarefa/:id').get
    (
        tarefasController.getTarefaById
    )

    router.route('/tarefa').post
    (
        tarefasController.createTarefa
    )

    router.route('/tarefa/:id').put
    (
        tarefasController.updateTarefa
    )

    router.route('/tarefa/:id').post
    (
        tarefasController.deleteTarefa
    )

    router.route('/mockTarefa').get
    (
        tarefasController.getMockTarefas
    )
}