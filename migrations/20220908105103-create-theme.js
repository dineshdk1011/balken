'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primary_theme: {
        type: Sequelize.STRING
      },
      secondary_theme: {
        type: Sequelize.STRING
      },
      primary_bg: {
        type: Sequelize.STRING
      },
      text_dark: {
        type: Sequelize.STRING
      },
      text_light: {
        type: Sequelize.STRING
      },
      secondary_bg: {
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
    await queryInterface.dropTable('themes');
  }
};