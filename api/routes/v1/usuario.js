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

    router.route('/usuario').post
    (
        usuarioController.createUsuario
    )

    router.route('/usuario/:id').put
    (
        usuarioController.updateUsuario
    )

    router.route('/usuario/:id').post
    (
        usuarioController.deleteUsuario
    )

    router.route('/mockUsuario').get
    (
        usuarioController.getMockUsuario
    )

}