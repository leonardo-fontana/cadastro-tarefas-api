const { tarefas, usuarios } = require("../models");

const getMockTarefas = (req, res, next) => {

   res.status(200).send([
        {
            id: 1,
            titulo: 'teste mock',
            data_inicio: '01/01/2020',
            data_fim: '01/01/2020'
        }
    ])
}

const getAllTarefas = async (req, res, next) => {
  
  try {
 
  const result = await tarefas.findAll({});
  
  res.status(200).send(result.map(item => {
      const { id, titulo,descricao, data_inicio, data_fim, usuario_id} = item;
        
      return {
        id,
        titulo,
        descricao,
        data_inicio,
        data_fim,
        usuario_id
      }

  }) || []); 
  } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Erro interno na aplicação!' });
  }
}

const getTarefaById = async (req, res) => {
  try {
    const { id } = req.params

    const result = await tarefas.findOne({
      where: {
        id: id
      },
      include: {
        model: usuarios,
        as: 'usuarios',
      },
    });

    const data = {
      id: result.id,
      titulo: result.titulo,
      descricao: result.descricao,
      data_inicio: result.data_inicio,
      data_fim: result.data_fim,
      usuarios: result.usuarios,
    }

    res.status(200).send(data);

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Erro interno na aplicação!' });

  }
}

const createTarefa = async (req, res, next) => {

  try {
    const post = await tarefas.create(req.body);
    res.status(200).send({ message: "Tarefa inserida com sucesso."})
  } catch (error) {
     res.status(500).json({error: error.message})
  }
}

const updateTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await tarefas.update(req.body, {
      where: { id: id }
    });
    if (updated) {    
      await tarefas.findOne({ where: { id: id } });
      res.status(200).send({  message: "Tarefa atualizada com sucesso." });
    }
  } catch (error) {
      res.status(500).send("Algo deu errado.");
  }
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
    getMockTarefas,
    getAllTarefas,
    getTarefaById,
    updateTarefa,
    createTarefa,
    deleteTarefa
}