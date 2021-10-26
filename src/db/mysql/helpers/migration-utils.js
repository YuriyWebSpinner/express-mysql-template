const getTimestampFields = (Sequelize, paranoid = false) => {
  const fields = {
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    ...(paranoid && { deletedAt: { type: Sequelize.DATE } }),
  };
  
  return fields;
};

module.exports = {
  getTimestampFields
};
