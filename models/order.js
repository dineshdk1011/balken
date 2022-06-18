'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    foodname: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    foodid: DataTypes.STRING,
    userid: DataTypes.STRING,
    status: DataTypes.STRING,
    orderid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};