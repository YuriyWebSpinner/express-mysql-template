const jwt = require('jsonwebtoken');
const rc = require("../utils/response-creator");
const {
  getUser
} = require("../services/users/db");


const login = async (req, res, next) => {
  const { success } = rc(res);
  const { body = {} } = req;
  const { email, password } = body;
  
  if ( !( email && password ) ) throw new Error('email or password not found');
  
  try {
    const user = await getUser({email, password});
    if(!(user && user.email)) throw new Error('user not found');
    const tokenKey = '1a2b-3c4d-5e6f-7g8h';
    const resData = {
      id: user.id,
      login: user.email,
      token: jwt.sign({ id: user.id }, tokenKey),
    }
    return success({status: 200, data: resData});
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  login
}

