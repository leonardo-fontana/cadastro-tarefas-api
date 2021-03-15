module.exports = (sequelize, DataTypes) => {
    const tarefa = sequelize.define(
        "tarefa",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        titulo: DataTypes.TEXT,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        },
        {
            underscored: true,
            paranoid: true,
            timestamps: false
        }
    );
        return tarefa;
};