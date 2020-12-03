'use strict';

const {
  Model,
  DataTypes
} = require(`sequelize`);

module.exports = (sequelize) => {
  class Collection extends Model {}

  Collection.init({
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
    description: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    pictures: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  }, {
    sequelize,
    paranoid: false,
  });

  return Collection;
};
