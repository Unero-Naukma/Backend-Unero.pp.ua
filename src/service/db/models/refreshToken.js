'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class RefreshToken extends Model {}

  RefreshToken.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    paranoid: false,
  });

  return RefreshToken;
};
