'use strict';

const {Router} = require(`express`);
const HttpStatus = require(`http-status-codes`);
const {
  newUserSchema,
  editedUserSchema,
  addressSchema,
} = require(`../schemas`);
const {
  schemaValidator,
  alreadyRegistered,
  authenticateJwt,
  authenticate,
  productIsAlreadyIn,
  productExists,
  checkAmountOfProducts,
  productIsNotIn,
  alreadyHasAddress,
} = require(`../middlewares`);
const {makeTokens} = require(`../jwt-helper`);
const jwt = require(`jsonwebtoken`);
const {JWT_REFRESH_SECRET} = require(`../../../config-env`);
const {ProductsPlacements: {cart, wishlist}} = require(`../../constants`);

const router = new Router();

module.exports = (app, userService, refreshTokenService, productService) => {
  app.use(`/user`, router);

  router.get(`/`, authenticateJwt, async (req, res) => {
    const {id} = res.locals.userData;
    const user = await userService.findById(id);
    res.status(HttpStatus.OK)
      .json({
        user
      });
  });

  router.post(`/register`, [
    schemaValidator(newUserSchema),
    alreadyRegistered(userService)
  ], async (req, res) => {
    const user = req.body;
    const newUser = await userService.add(user);
    const {id} = newUser;
    const {accessToken, refreshToken} = makeTokens({id});

    await refreshTokenService.add(refreshToken);

    res.status(HttpStatus.CREATED)
      .json({
        user: newUser,
        jwt: {
          accessToken,
          refreshToken
        }
      });
  });

  router.post(`/login`, authenticate(userService), async (req, res) => {
    const user = res.locals.user;
    const {id} = user;
    const {accessToken, refreshToken} = makeTokens({id});

    await refreshTokenService.add(refreshToken);

    return res.status(HttpStatus.OK)
      .json({
        user,
        jwt: {
          accessToken,
          refreshToken
        }
      });
  });

  router.post(`/refresh`, async (req, res) => {
    const {token} = req.body;

    if (!token) {
      res.sendStatus(HttpStatus.BAD_REQUEST);
      return;
    }

    const existingToken = await refreshTokenService.find(token);

    if (!existingToken) {
      res.sendStatus(HttpStatus.NOT_FOUND);
      return;
    }

    jwt.verify(token, JWT_REFRESH_SECRET, async (err, userData) => {
      if (err) {
        return res.sendStatus(HttpStatus.FORBIDDEN);
      }

      const {id} = userData;
      const {accessToken, refreshToken} = makeTokens({id});

      await refreshTokenService.drop(existingToken.data);
      await refreshTokenService.add(refreshToken);

      return res.json({
        jwt: {
          accessToken,
          refreshToken,
        }
      });
    });
  });

  router.delete(`/logout`, authenticateJwt, async (req, res) => {
    const {token} = req.body;
    await refreshTokenService.drop(token);
    res.sendStatus(HttpStatus.NO_CONTENT);
  });

  router.post(`/cart/products/:productId`, [authenticateJwt, checkAmountOfProducts, productExists(productService), productIsAlreadyIn(cart, userService)], async (req, res) => {
    const {
      product,
      amount,
      userData: {id: userId}
    } = res.locals;
    const addedProduct = await userService.addProductTo(cart, userId, product, amount);
    res.status(HttpStatus.OK)
      .json(addedProduct);
  });

  router.post(`/wishlist/products/:productId`, [authenticateJwt, productExists(productService), productIsAlreadyIn(wishlist, userService)], async (req, res) => {
    const {
      product,
      userData: {id: userId}
    } = res.locals;
    const addedProduct = await userService.addProductTo(wishlist, userId, product);
    res.status(HttpStatus.OK)
      .json(addedProduct);
  });

  router.patch(`/cart/products/:productId`, [authenticateJwt, checkAmountOfProducts, productExists(productService)], async (req, res) => {
    const {
      product,
      amount,
      userData: {id: userId}
    } = res.locals;
    await userService.updateAmountOfProductInCart(userId, product, amount);
    res.sendStatus(HttpStatus.OK);
  });

  router.delete(`/cart/products/:productId`, [authenticateJwt, productExists(productService), productIsNotIn(cart, userService)], async (req, res) => {
    const {
      product,
      userData: {id: userId}
    } = res.locals;
    const deletedProduct = await userService.deleteProductFrom(cart, userId, product);
    res.status(HttpStatus.OK)
      .json(deletedProduct);
  });

  router.delete(`/wishlist/products/:productId`, [authenticateJwt, productExists(productService), productIsNotIn(wishlist, userService)], async (req, res) => {
    const {
      product,
      userData: {id: userId}
    } = res.locals;
    const deletedProduct = await userService.deleteProductFrom(wishlist, userId, product);
    res.status(HttpStatus.OK)
      .json(deletedProduct);
  });

  router.patch(`/`, [authenticateJwt, schemaValidator(editedUserSchema, userService)], async (req, res) => {
    const {
      userData: {id: userId}
    } = res.locals;
    const {body: editedUser} = req;
    const updatedUserProfile = await userService.updateUserProfile(userId, editedUser);
    res.status(HttpStatus.OK)
      .json(updatedUserProfile);
  });

  router.post(`/address`, [authenticateJwt, alreadyHasAddress(userService), schemaValidator(addressSchema)], async (req, res) => {
    const {
      user
    } = res.locals;
    const {body: address} = req;
    const createdAddress = await userService.createAddress(user, address);
    res.status(HttpStatus.CREATED)
      .json(createdAddress);
  });


  router.patch(`/address`, [authenticateJwt, schemaValidator(addressSchema)], async (req, res) => {
    const {
      userData: {id: userId},
    } = res.locals;
    const {body: editedAddress} = req;
    const updatedAddress = await userService.updateAddress(userId, editedAddress);
    res.status(HttpStatus.OK)
      .json(updatedAddress);
  });
};
