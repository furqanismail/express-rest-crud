module.exports = (sequelize, Datatypes) => {
    const Todo = sequelize.define('Todo', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: Datatypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: Datatypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'todos',
        timestamps: true
    });

    return Todo;
}