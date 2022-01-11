const { schemas } = require('../../middlewares/validator');
const chai = require("chai");
const joi = require("joi");

chai.should();

describe('User validate',function() {
  const user = {
    email: 'test@gmail3.com',
    name: 'TestUser',
    password: '1111',
    level: 0
  };
  
  it('Should right validate',function(done) {
    const resultSuccess = joi.object().keys(schemas.user).validate(user);
    chai.expect(resultSuccess.error).not.exist;
    done();
  });
  
  it('Should wrong validate',function(done) {
    user.email1 = 'error';
    const resultError = joi.object().keys(schemas.user).validate(user);
    chai.expect(resultError.error).exist;
    done();
  });
})
