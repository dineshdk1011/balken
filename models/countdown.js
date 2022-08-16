'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Countdown.init({
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    notes: DataTypes.STRING,
    todate: DataTypes.STRING,
    totime: DataTypes.STRING,
    price: DataTypes.STRING,
    foods: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Countdown',
  });
  return Countdown;
};