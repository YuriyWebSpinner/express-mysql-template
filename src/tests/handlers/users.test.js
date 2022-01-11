const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

describe('User life circlie',function(){

  // user data
  const user = {
    email: 'test@gmail-2.com',
    name: 'TestUser',
    password: '1111',
    level: 0
  };

  it('Should return a created user profile',function(done){
    request(app)
      .post('/v1/users')
      .auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxODg0MTQ3fQ.hHomouB7ZF_XQvHagHFTdh8JGgWdtBQ_CJirWtcS6oU', { type: 'bearer' })
      .send(user)
      .end(function(err, res){
        const { body = {} } = res;
        expect(body.email).to.equal(user.email);
        expect(body.name).to.equal(user.name);
        user.id = body.id;
        done()
      });
  });

  it('Should return a user profile',function(done){
    request(app)
      .get(`/v1/users/${user.id}`)
      .auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxODg0MTQ3fQ.hHomouB7ZF_XQvHagHFTdh8JGgWdtBQ_CJirWtcS6oU', { type: 'bearer' })
      .end(function(err, res){
        const { body = {} } = res;
        expect(body.email).to.equal(user.email);
        expect(body.name).to.equal(user.name);
        done()
      });
  });
  
  it('Should delete of created user',function(done){
    request(app)
      .delete('/v1/users')
      .send({id: user.id})
      .auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxODg0MTQ3fQ.hHomouB7ZF_XQvHagHFTdh8JGgWdtBQ_CJirWtcS6oU', { type: 'bearer' })
      .end(function(err, res){
        const { body = {} } = res;
        expect(body).to.equal('1');
        done()
      });
  });
});
