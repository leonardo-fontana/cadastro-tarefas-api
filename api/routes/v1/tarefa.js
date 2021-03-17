const tarefasController = require('../../controllers/tarefa-controller')

module.exports = (router) => {
    router.route('/tarefa').get
    (
        tarefasController.getAllTarefas
    ),

    router.route('/tarefa/:id').get
    (
        tarefasController.getTarefaById
    )

    router.route('/tarefa/:tarefaid/usuarios').post
    (
        tarefasController.createTarefa
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