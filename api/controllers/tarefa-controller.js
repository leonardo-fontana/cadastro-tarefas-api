const { tarefas } = require("../models");

const tarefaService = require("../services/tarefa-service");

const getAllTarefas = async (req, res, next) => {
  
  try 
  {
    const tarefas = await tarefaService.getAllTarefas();
    
    return res.status(200).send(tarefas);

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Erro interno na aplicação!' });
    }
}

const getTarefaById = async (req, res) => {
  try {
    const { params } = req;

    const user = await tarefaService.getTarefaById(params.id);

    return res.status(200).send(user);

  } catch (error) {

    console.log(error);
    return res.status(500).send({
      mensagem: "internal server error",
    });

  }
}

const createTarefa = async (req, res, next) => {

  try {  
    const { body } = req;

    await tarefaService.createTarefa(body);

    return res.status(200).send({
      mensagem: 'Tarefa cadastrada com sucesso',
    });

  } catch (error) {

    console.log(error);
    res.status(500).send({
      mensagem: "ERROR!!",
    });
  }

}

const updateTarefa = async (req, res) => {
  
  await tarefaService.updateTarefa(params.id, body);

  return res.status(200).send({
    mensagem: 'Alteração realizada com sucesso',
  });

};

const deleteTarefa = async (req, res, next) => {
  try {
    const { id } = req.params;
    tarefas.destroy({ where: { id: id }});
    res.status(200).send({ message: "Tarefa deletada com sucesso."})

  } catch {
    console.log(error)
    res.status(500).send({ message: 'Erro interno na aplicação!' });
  }
}

module.exports = {
    getAllTarefas,
    getTarefaById,
    updateTarefa,
    createTarefa,
    deleteTarefa
}