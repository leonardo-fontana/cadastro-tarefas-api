module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
      "usuario",
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
      return usuario;
};