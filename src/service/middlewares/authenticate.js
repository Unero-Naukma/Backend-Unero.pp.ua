'use strict';

const {LoginMessage} = require(`../../constants`);
const HttpStatus = require(`http-status-codes`);

module.exports = (userService) => (
  async (req, res, next) => {
    const {email, password} = req.body;
    const existingUser = await userService.findByEmail(email);

    if (!existingUser) {
      res.status(HttpStatus.FORBIDDEN)
        .json({errorMessages: [LoginMessage.USER_NOT_EXISTS]});

      return;
    }

    if (!await userService.checkUser(existingUser, password)) {
      res.status(HttpStatus.FORBIDDEN)
        .json({errorMessages: [LoginMessage.WRONG_PASSWORD]});

      return;
    }

    res.locals.user = existingUser;
    next();
  }
);
