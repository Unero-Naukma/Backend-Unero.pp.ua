'use strict';

class CollectionService {
  constructor(db) {
    this._db = db;
  }

  async findAll() {
    return await this._db.models.Collection.findAll({
      include: [{
        model: this._db.models.Product,
        as: `products`,
        include: [`categories`]
      }]
    });
  }

  async findOne(id) {
    const collection = await this._db.models.Collection.findByPk(id, {
      include: [{
        model: this._db.models.Product,
        as: `products`,
        include: [`categories`]
      }]
    });

    return collection;
  }
}

module.exports = CollectionService;
