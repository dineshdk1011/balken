'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  theme.init({
    primary_theme: DataTypes.STRING,
    secondary_theme: DataTypes.STRING,
    primary_bg: DataTypes.STRING,
    text_dark: DataTypes.STRING,
    text_light: DataTypes.STRING,
    secondary_bg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'theme',
  });
  return theme;
};