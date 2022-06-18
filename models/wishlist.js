"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wishlist.init(
    {
      foodname: DataTypes.STRING,
      foodid: DataTypes.STRING,
      userid: DataTypes.STRING,
      wishlistid: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "wishlist",
    }
  );
  return wishlist;
};
