const User = require("../../../db/mysql/models/Users");
const { sequelize } = require("../../../db/mysql");

const deleteUser = async  ( id ) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await User.destroy({ where: { id }, transaction });
    await transaction.commit();
    return user;
  } catch (error) {
    console.log(error);
    await  transaction.rollback();
    return { success: false, error }
  }
}


module.exports = {
  deleteUser
}
