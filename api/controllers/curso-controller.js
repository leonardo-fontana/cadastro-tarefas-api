const getAllCursos = (req, res, next) => {

    res.status(200).send([
        {
            id: 1,
            name: 'teste mock'
        }
    ])
}


module.exports = {
    getAllCursos
}