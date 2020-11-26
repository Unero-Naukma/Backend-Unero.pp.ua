'use strict';

class ProductService {
  constructor(db) {
    this._db = db;
  }

  async findAll(options) {
    if (options) {
      console.log(options);
      return null;
    } else {
      return await this._db.models.Product.findAll();
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
