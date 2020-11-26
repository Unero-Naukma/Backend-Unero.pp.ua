'use strict';

class CategoryService {
  constructor(db) {
    this._db = db;
  }

  async findAll() {
    return await this._db.models.Category.findAll();
  }
}

module.exports = CategoryService;
