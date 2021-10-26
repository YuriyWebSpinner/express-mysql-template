'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('users', [
       {
         name: 'Yuriy',
         email: 'admin@gmail.com',
         password: '1234',
         level: 0
       },
       {
         name: 'User',
         email: 'usern@gmail.com',
         password: '1234',
         level: 1
       }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
