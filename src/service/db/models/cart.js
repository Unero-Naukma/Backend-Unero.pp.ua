'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class Cart extends Model {}

  Cart.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false,
    paranoid: false,
  });

  return Cart;
};
