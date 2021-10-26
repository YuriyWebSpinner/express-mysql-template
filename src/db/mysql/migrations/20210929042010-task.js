const {getTimestampFields} = require("../helpers/migration-utils");
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('task', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      references: {
        model: "users",
        key: "id",
        as: "user_id",
      },
    },
    ...getTimestampFields(Sequelize, true)
  }),
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('task');
  }
};
