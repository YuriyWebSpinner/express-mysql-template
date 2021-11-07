const User = require("../../../db/mysql/models/Users");
const { sequelize } = require("../../../db/mysql");

const createUser = async (values) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await User.create(values, { transaction });
    await transaction.commit();
    return user;
  } catch (error) {
    console.log(error);
    await  transaction.rollback();
    return { success: false, error }
  }
}

module.exports = {
  createUser
}
