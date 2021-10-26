const rc = require("../utils/response-creator");
const {
  getAllUsers
} = require("../services/users");

const getUsers = async (req, res, next) => {
  const { success, fail } = rc(res);
  try {
    const users = await getAllUsers();
    return success({data: users});
  } catch (e) {
    console.log(e);
    next(e);
  }
  
}

module.exports = {
  getUsers
}
