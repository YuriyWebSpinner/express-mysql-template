const User = require("../../../db/mysql/models/Users");

const getAllUsers = async () => {
  return await User.findAndCountAll();
}

const getUser = async (user) => {
  return await User.findOne({
    where: user
  });
}

module.exports = {
  getAllUsers,
  getUser
}
