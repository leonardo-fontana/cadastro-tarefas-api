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

}