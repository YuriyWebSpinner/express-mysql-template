const rc = require("../utils/response-creator");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../services/users/db");

const createUserHandler = async (req, res, next) => {
  const { success } = rc(res);
  const { body = {} } = req;
  try {
    const users = await createUser(body);
    return success({data: users});
  } catch (e) {
    console.log(e);
    next(e);
  }
}

const updateUserHandler = async (req, res, next) => {
  const { success } = rc(res);
  const { body = {} } = req;
  const { data, id } = body;
  try {
    const user = await updateUser( id, data );
    return success({ data: user });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

const deleteUserHandler = async (req, res, next) => {
  const { success } = rc(res);
  const { body = {} } = req;
  const { id } = body;
  try {
    const user = await deleteUser( id );
    return success({ data: user });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

const getUsersHandler = async (req, res, next) => {
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
  getUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
}
