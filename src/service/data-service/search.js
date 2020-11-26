'use strict';

const Sequelize = require(`sequelize`);

class SearchService {
  constructor(db) {
    this._db = db;
  }

  async findAll(searchText) {
    const Operator = Sequelize.Op;
    const searchResults = await this._db.models.Product.findAll({
      where: {
        title: {
          [Operator.iLike]: `%${searchText}%`,
        }
      },
      include: [`categories`]
    });

    return searchResults;
  }
}

module.exports = SearchService;
