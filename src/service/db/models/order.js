'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class Order extends Model {}

  Order.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    paranoid: false,
  });

  return Order;
};
