'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        code: {
          type: Sequelize.STRING,
          allowNull: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        price: {
          type: Sequelize.STRING,
          allowNull: true
        },
        status: {
          type: Sequelize.STRING,
          allowNull: true
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

      await queryInterface.addConstraint('products', {
        type: 'unique',
        fields: ['code'],
        name:'UNIQUE_PRODUCTS_CODE'
      })

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('products');
  }
};
