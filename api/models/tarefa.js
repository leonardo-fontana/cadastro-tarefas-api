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
        data_inicio: DataTypes.DATE,
        },
        {
            underscored: true,
            paranoid: true,
            timestamps: false
        }
    );
        return tarefas;
};