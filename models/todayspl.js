'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todayspl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todayspl.init({
    item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todayspl',
  });
  return Todayspl;
};