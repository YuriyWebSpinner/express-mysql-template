const User = require("../../../db/mysql/models/Users");
const { sequelize } = require("../../../db/mysql");

const updateUser = async (id, values) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await User.update(values, { where: { id }, transaction });
    await  transaction.commit();
    return user;
  } catch (error) {
    await  transaction.rollback();
    return { success: false, error }
  }
}


module.exports = {
  updateUser
}
