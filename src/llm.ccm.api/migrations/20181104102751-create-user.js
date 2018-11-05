'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: { 
        type: Sequelize.STRING 
      },
      lastName: { 
        type: Sequelize.STRING 
      },
      gender: { 
        type: Sequelize.STRING 
      },
      email: { 
        type: Sequelize.STRING 
      },
      phone: { 
        type: Sequelize.STRING 
      },
      address: { 
        type: Sequelize.STRING 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};