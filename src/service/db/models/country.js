'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class Country extends Model {}

  Country.init({
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

  return Country;
};
