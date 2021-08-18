module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('User', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        }, 
        password: {
            type: Datatypes.STRING,
            allowNull: false
        },
        address: {
            type: Datatypes.STRING,
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
        tableName: 'users',
        timestamps: true
    });

    return User;
}