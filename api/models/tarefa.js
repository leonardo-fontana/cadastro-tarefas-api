module.exports = (sequelize, DataTypes) => {
    const tarefas = sequelize.define(
        "tarefas",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        titulo: DataTypes.TEXT,
        descricao: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE
        },
        
        {
            underscored: true,
            paranoid: true,
            timestamps: false
        }
    );
  
    tarefas.associate = function (models) {
        tarefas.belongsTo(models.usuarios, {
          foreignKey: 'usuario_id',
          as: 'usuarios'
        });
    };

    return tarefas;
};