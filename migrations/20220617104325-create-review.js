'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.STRING
      },
      dislike: {
        type: Sequelize.STRING
      },
      foodid: {
        type: Sequelize.STRING
      },
      fresh: {
        type: Sequelize.STRING
      },
      package: {
        type: Sequelize.STRING
      },
      taste: {
        type: Sequelize.STRING
      },
      userid:{
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
    await queryInterface.dropTable('Reviews');
  }
};