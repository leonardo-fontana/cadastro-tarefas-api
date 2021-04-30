//const { usuarios } = require("../models"); 
const usuarioService = require("../services/usuario-service");

const autenticar = async (req, res, next) => {

  try {

    const { usuario, senha } = req.body;

    const result = await usuarioService.usuarioExiste(usuario, senha);

    if (!result) {
      return res.status(401).send({
        mensagem: 'usuário ou senha inválidos'
      })
    }

    var credencial = await usuarioService.criaCredencial(usuario);

    return res.status(200).send(credencial);

  } catch (error) {

    console.log(error);

    res.status(500).send({
      mensagem: "ERROR!!",
    });

  }

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
    
    const { body } = req;

    const validacaoEmail = await usuarioService.validaSeEmailJaExiste(body.email);

    console.log(validacaoEmail);

    if (validacaoEmail) {
      return res.status(400).send({
        mensagem: `"email" já cadastrado.`,
      });
    }

    await usuarioService.criaAluno(body);

    return res.status(200).send({
      mensagem: 'cadastro realizado com sucesso',
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      mensagem: "ERROR!!",
    });
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
    autenticar,
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
}