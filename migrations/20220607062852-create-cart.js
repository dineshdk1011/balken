'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodname: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      foodid: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      cartid: {
        type: Sequelize.STRING
      },
      value: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};