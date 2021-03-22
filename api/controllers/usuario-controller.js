const { tarefas, usuarios } = require("../models");

const getMockUsuario= (req, res, next) => {

   res.status(200).send([
        {
            id: 1,
            nome: 'Fulano de Tal',
            email: 'fulano@ciclano.com'
        }
    ])
}

const getAllUsuarios = async (req, res, next) => {

  try 
  {
    const result = await usuarios.findAll({});
    
    res.status(200).send(result.map(item => {
        const { id, nome, sobrenome, email} = item;
          
        return {
          id,
          nome,
          sobrenome,
          email,
        }
  
    }) || []); 
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Erro interno na aplicação!' });
    }
}

const  getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params

    const result = await usuarios.findOne({
      where: {
        id: id
      }
    });

    const data = {
      id: result.id,
      nome: result.nome,
      sobrenome: result.sobrenome,
      email: result.email
    }

    res.status(200).send(data);

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Erro interno na aplicação!' });

  }
}

const createUsuario = async (req, res, next) => {

  try {
    const post = await usuarios.create(req.body);
    res.status(200).send({ message: "Usuário inserida com sucesso."})
  } catch (error) {
     res.status(500).json({error: error.message})
  }
}

const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await usuarios.update(req.body, {
      where: { id: id }
    });
    if (updated) {    
      await usuarios.findOne({ where: { id: id } });
      res.status(200).send({  message: "Usuário atualizado com sucesso." });
    }
  } catch (error) {
      res.status(500).send("Algo deu errado.");
  }
};

const deleteUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    usuarios.destroy({ where: { id: id }});
    res.status(200).send({ message: "Usuário deletada com sucesso."})

  } catch {
    console.log(error)
    res.status(500).send({ message: 'Erro interno na aplicação!' });
  }
}

module.exports = {
    getMockUsuario,
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
}