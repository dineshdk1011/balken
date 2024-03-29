'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    foodname: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    foodid: DataTypes.STRING,
    userid: DataTypes.STRING,
    status: DataTypes.STRING,
    cartid: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};