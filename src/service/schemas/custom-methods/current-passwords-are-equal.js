'use strict';

module.exports = (userId, userService) => async (value) => {
  const user = await userService.findById(userId);
  if (!await userService.checkUser(user, value)) {
    throw new Error(`Current password is incorrect. Check and try again!`);
  }

  return value;
};
