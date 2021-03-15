const usuarioController = require('../../controllers/usuario-controller')

module.exports = (router) => {
    router.route('/usuario').get
    (
        usuarioController.getAllUsuarios
    ),

    router.route('/usuario/:id').get
    (
        usuarioController.getUsuarioById
    )

    router.route('/mockUsuario').get
    (
        usuarioController.getMockUsuario
    )

}