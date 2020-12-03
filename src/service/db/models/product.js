'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class Product extends Model {}

  Product.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    paranoid: false,
  });

  return Product;
};
