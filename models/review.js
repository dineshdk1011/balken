'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    review: DataTypes.STRING,
    rating: DataTypes.STRING,
    like: DataTypes.STRING,
    dislike: DataTypes.STRING,
    foodid: DataTypes.STRING,
    fresh: DataTypes.STRING,
    package: DataTypes.STRING,
    taste: DataTypes.STRING,
    userid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};