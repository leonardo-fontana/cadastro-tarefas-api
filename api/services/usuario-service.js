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

    const credencial = {
      token: jwt.sign({ email: usuario.email }, process.env.JWT_KEY, {
        expiresIn: `1500s`,
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

const createUsuario= async (model) => {

  const usuarioModel = {
    nome: model.nome,
    email: model.email,
    tipo: '2',
    senha: criarHash(model.senha),
  };

  return usuarios.create(usuarioModel);
}

const updateUsuario = async (id, model) => {
  return usuarios.update(
    {
      nome: model.nome,
      email: model.email,
    },
    {
      where: { id: id }
    }
  )
}

const getAllUsuarios = async () => {

  const resultadoDB = await usuarios.findAll({})

  return resultadoDB.map(item => {

    const { id, email, nome, tipo } = item;

    return {
      id,
      nome,
      email,
      tipo
    }
  });
}

const getUsuarioById = async (idUsuario) => {

  const itemDB = await usuarios.findOne({
    where: {
      id: idUsuario
    },
  });

  const { id, nome, email,tipo } = itemDB;

  return {
    id,
    nome,
    email,
    tipo
  }
}



module.exports = {
  usuarioExiste,
  criaCredencial,
  validaSeEmailJaExiste,
  buscarPorEmail,
  createUsuario,
  updateUsuario,
  getAllUsuarios,
  getUsuarioById
}
