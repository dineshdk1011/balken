"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menus.init(
    {
      foodname: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      offerprice: DataTypes.STRING,
      quantity: DataTypes.STRING,
      type: DataTypes.BOOLEAN,
      foodimg: DataTypes.STRING,
      category: DataTypes.STRING,
      tag: DataTypes.STRING,
      foodid: DataTypes.STRING,
      discount: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Menus",
    }
  );
  return Menus;
};
