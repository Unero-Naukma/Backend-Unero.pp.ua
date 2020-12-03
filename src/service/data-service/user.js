'use strict';

const bcrypt = require(`bcrypt`);
const saltRounds = 10;

class UserService {
  constructor(db) {
    this._db = db;
    this._userInclude = [{
      model: this._db.models.Cart,
      as: `cart`,
      include: [{
        model: this._db.models.Product,
        as: `products`,
        include: [`categories`]
      }]
    },
    {
      model: this._db.models.Wishlist,
      as: `wishlist`,
      include: [{
        model: this._db.models.Product,
        as: `products`,
        include: [`categories`]
      }]
    },
    {
      model: this._db.models.Order,
      as: `orders`,
      include: [`status`]
    }];
  }

  async findByEmail(email) {
    return await this._db.models.User.findOne({
      where: {
        email
      },
      include: this._userInclude,
    });
  }

  async findById(id, raw) {
    if (raw) {
      return await this._db.models.User.findByPk(id, {
        raw: true
      });
    }

    return await this._db.models.User.findByPk(id, {
      include: this._userInclude,
    });
  }

  async add(user) {
    const {name, email, password} = user;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await this._db.models.User.create({
      displayName: name,
      password: hash,
      email
    });

    const cart = await this._db.models.Cart.create();
    cart.setUser(newUser);
    newUser.setCart(cart);

    const wishlist = await this._db.models.Wishlist.create();
    wishlist.setUser(newUser);
    newUser.setWishlist(wishlist);

    return newUser;
  }

  async checkUser(user, password) {
    const match = await bcrypt.compare(password, user.password);
    return match;
  }

  async isProductIn(place, userId, productId) {
    const user = await this.findById(userId);
    let placeObj;
    switch (place) {
      case `cart`:
        placeObj = await user.getCart();
        break;
      case `wishlist`:
        placeObj = await user.getWishlist();
        break;
    }
    const productsInPlaceObj = await placeObj.getProducts({
      raw: true
    });
    const foundProduct = productsInPlaceObj.find((product) => product.id === productId);
    return !!foundProduct;
  }

  async addProductTo(place, userId, product, amount) {
    const user = await this.findById(userId);
    let placeObj;
    switch (place) {
      case `cart`:
        placeObj = await user.getCart();
        break;
      case `wishlist`:
        placeObj = await user.getWishlist();
        break;
    }

    if (place === `cart`) {
      await placeObj.addProduct(product, {
        through: {
          amount
        }
      });
    } else {
      await placeObj.addProduct(product);
    }

    return product;
  }

  async updateAmountOfProductInCart(userId, product, amount) {
    const user = await this.findById(userId);
    const cart = await user.getCart();
    await cart.addProduct(product, {
      through: {
        amount
      }
    });
  }

  async deleteProductFrom(place, userId, product) {
    const user = await this.findById(userId);
    let placeObj;
    switch (place) {
      case `cart`:
        placeObj = await user.getCart();
        break;
      case `wishlist`:
        placeObj = await user.getWishlist();
        break;
    }
    await placeObj.removeProduct(product);
    return product;
  }

  async updateUserProfile(userId, editedUser) {
    const user = await this.findById(userId);
    if (editedUser.firstName) {
      user.firstName = editedUser.firstName;
    }

    if (editedUser.lastName) {
      user.lastName = editedUser.lastName;
    }

    if (user.displayName !== editedUser.displayName) {
      user.displayName = editedUser.displayName;
    }

    if (user.email !== editedUser.email) {
      user.email = editedUser.email;
    }

    if (editedUser.passwordObj) {
      const {newPassword} = editedUser.passwordObj;
      const hash = await bcrypt.hash(newPassword, saltRounds);
      user.password = hash;
    }

    await user.save();
    return user;
  }

  async createAddress(user, address) {
    const newAddress = await this._db.models.Address.create({
      firstName: address.firstName,
      lastName: address.lastName,
      city: address.city,
      houseStreet: address.houseStreet,
      apartment: address.apartment,
      postcode: address.postcode,
      email: address.email,
      phone: address.phone,
    });

    const country = await this._db.models.Country.findByPk(address.country);
    const state = await this._db.models.State.findByPk(address.state);

    await newAddress.setCountry(country);
    await newAddress.setState(state);

    return newAddress;
  }
}

module.exports = UserService;
