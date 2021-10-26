const User = require("../db/mysql/models/Users");
const { forbidden } = require("../utils/response-creator");
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const tokenKey = '1a2b-3c4d-5e6f-7g8h';
  if (!req.headers.authorization) return next({type: 'auth', message: 'not found auth'});
  await jwt.verify(
    req.headers.authorization.split(' ')[1],
    tokenKey,
    async (err, payload) => {
      if (err) next(err);
      const { id } = payload;
      const user = await User.findOne({ where: { id } } );
      if(user && user.id) {
        req.user = user;
      }
      
      if (!req.user) next();
    }
  )
  
  next()
};

module.exports = auth;
