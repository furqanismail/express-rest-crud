'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('todos', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }  
    
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('todos');

  }
};
