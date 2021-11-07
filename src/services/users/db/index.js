const getUsers = require('./getting');
const createUsers = require('./create');
const updateUsers = require('./update');
const deleteUsers = require('./delete');

module.exports = {
  ...getUsers,
  ...createUsers,
  ...updateUsers,
  ...deleteUsers
}
