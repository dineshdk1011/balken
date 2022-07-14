'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Swiper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Swiper.init({
    img: DataTypes.STRING,
    heading: DataTypes.STRING,
    subheading: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Swiper',
  });
  return Swiper;
};