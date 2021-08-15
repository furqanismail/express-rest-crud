module.exports = (sequelize, Datatypes) => {
    const Todo = sequelize.define('Todos', {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize.STRING,
            allowNull: false
        },
        description: {
            type: sequelize.TEXT,
            allowNull: false
        },
        createdAt: {
            type: sequelize.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: sequelize.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'todos',
        timestamps: true
    });

    return Todo;
}