const usersRoute = require("../users");
const router = (app) => {
  app.use('/users', usersRoute);
}

module.exports = router;
