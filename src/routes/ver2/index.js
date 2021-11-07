const usersRoute = require("../users");
const router = (app) => {
  app.use('/users2', usersRoute);
}

module.exports = router;
