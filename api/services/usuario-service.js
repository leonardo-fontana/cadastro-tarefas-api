const md5 = require('md5');
const jwt = require('jsonwebtoken');
const hashSecret = process.env.CRYPTO_KEY;
const { usuarios, inscricoes, cursos } = require("../models");

const buscarPorEmail = async (email) => {
  return usuarios.findOne({
    where: {
      email: email
    },
  });
}

const criarHash = (senha) => {
  return md5(senha + hashSecret);
}

const usuarioExiste = async (usuario, senha) => {
  const usuarioFromDB = await usuarios.findOne({
    where: {
      email: usuario,
      senha: criarHash(senha)
    },
  });
  return usuarioFromDB ? true : false;
};

const criaCredencial = async (usuarioEmail) => {

  try {

    const usuario = await usuarios.findOne({
      where: {
        email: usuarioEmail
      },
    });

    const { nome, email, tipo } = usuario;

    // console.log('usuari$$$$$$o', usuario);

    const credencial = {
      token: jwt.sign({ email: usuario.email }, process.env.JWT_KEY, {
        expiresIn: `${process.env.JWT_VALID_TIME}ms`,
      }),
      usuario: {
        nome,
        email,
        tipo,
      }
    }

    return credencial;

  } catch (error) {
    console.log(error);
  }
}

const validaSeEmailJaExiste = async (email, id = 0) => {

  const resul = await buscarPorEmail(email);

  if (id === 0) {
    return resul ? true : false;
  }

  if (resul) {

    if (resul.id === id)
      return false;

    return true;
    
  } else {
    return false;

  }
}

const criaAluno = async (model) => {

  const modelParaCadastro = {
    nome: model.nome,
    email: model.email,
    tipo: '2',
    senha: criarHash(model.senha),
  };

  return usuarios.create(modelParaCadastro);

}

const alteraAluno = async (id, model) => {
  return usuarios.update(
    {
      nome: model.nome,
      email: model.email,
      datanascimento: model.datanascimento,
    },
    {
      where: { id: id }
    }
  )
}

const listarAlunos = async () => {

  const reuslFromDB = await usuarios.findAll({
    where: {
      tipo: '2'
    },
    include: [
      {
        model: inscricoes,
        as: 'inscricoes',
        include: [
          {
            model: cursos,
            as: 'curso'
          }
        ]
      }
    ],
  });

  return reuslFromDB.map(item => {

    const { id, email, nome, tipo, inscricoes } = item;

    return {
      id,
      nome,
      email,
      tipo,
      inscricoes: inscricoes.reduce((acc, item) => {
        const { id, curso } = item;
        const novoItem = { id, curso: curso.name, };
        return [...acc, novoItem]
      }, []),

    }


  });

}

module.exports = {
  usuarioExiste,
  criaAluno,
  criaCredencial,
  validaSeEmailJaExiste,
  buscarPorEmail,
  alteraAluno,
  listarAlunos
}
