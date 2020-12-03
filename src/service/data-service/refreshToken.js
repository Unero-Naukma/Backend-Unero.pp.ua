'use strict';

class RefreshTokenService {
  constructor(db) {
    this._db = db;
  }

  async add(token) {
    await this._db.models.RefreshToken.create({
      data: token
    });
  }

  async find(token) {
    return await this._db.models.RefreshToken.findOne({
      where: {
        data: token
      },
      raw: true
    });
  }

  async drop(token) {
    await this._db.models.RefreshToken.destroy({
      where: {
        data: token
      }
    });
  }
}

module.exports = RefreshTokenService;
