module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
      "usuarios",
      {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false
      },
      nome: DataTypes.TEXT,
      email: DataTypes.TEXT,
      },
      {
          underscored: true,
          paranoid: true,
          timestamps: false
      }
  );

  usuarios.associate = function (models) {

    usuarios.hasMany(models.tarefas, {
      foreignKey: 'usuario_id',
      as: 'tarefas'
    });
  };
    return usuarios;
};