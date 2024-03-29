"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init(
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pincode: DataTypes.STRING,
      country: DataTypes.STRING,
      user_id: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
