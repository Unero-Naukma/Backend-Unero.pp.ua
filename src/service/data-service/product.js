'use strict';

const Sequelize = require(`sequelize`);
const Op = Sequelize.Op;

class ProductService {
  constructor(db) {
    this._db = db;
  }

  async findAll(options) {
    if (options) {
      const {sortBy, filters} = options;
      let order = [];
      switch (sortBy) {
        case `newness`:
          order.push([`createdAt`, `DESC`]);
          break;
        case `priceLowToHigh`:
          order.push([`price`, `ASC`]);
          break;
        case `priceHighToLow`:
          order.push([`price`, `DESC`]);
          break;
        default:
          order = undefined;
      }
      let where;
      if (filters) {
        where = {};
        const {price} = filters;
        if (price) {
          const {min, max} = price;
          if (min && max) {
            where.price = {
              [Op.gte]: min,
              [Op.lte]: max
            };
          } else if (min) {
            where.price = {
              [Op.gte]: min
            };
          } else if (max) {
            where.price = {
              [Op.lte]: max
            };
          }
        }
      }
      return await this._db.models.Product.findAll({
        include: [`categories`],
        order,
        where
      });
    } else {
      return await this._db.models.Product.findAll({
        include: [`categories`]
      });
    }
  }

  async findOne(id) {
    const product = await this._db.models.Product.findByPk(id, {
      include: [`categories`]
    });

    return product;
  }
}

module.exports = ProductService;
