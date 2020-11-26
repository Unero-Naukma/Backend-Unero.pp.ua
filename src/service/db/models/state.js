'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class State extends Model {}

  State.init({
    id: {
      type: DataTypes.CHAR,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false,
    paranoid: false,
  });

  return State;
};
