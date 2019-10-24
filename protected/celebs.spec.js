const request = require('supertest');
const server = require('../api/server.js');
const app = request(server);


let token;



describe('GET /api/protected/users', () => {

    beforeEach((done) => {
        app
          .post('/api/login')
          .send({
              username: 'reverseflash',
              password: 'downwithbarry'
          })
          .end((err, res) => {
              token = res.body.token;
              done();
              
          });
    });
    it('should give 200 OK with token', () => {
        
        return app
          .get('/api/protected/users')
          .set('Authorization', `${token}`)
          .then(res => {
            expect(res.status)
              .toBe(200);
            expect(res.type)
              .toBe('application/json');
          })
    })
    it('should give 401 without proper token', () => {

        return app
          .get('/api/protected/users')
          .set('Authorization', 'notavalidtoken')
          .then(res => {
              expect(res.status)
                .toBe(401);
              
          })
    })
})

describe('celebs', () => {
    beforeEach((done) => {
        app
          .post('/api/login')
          .send({
              username: 'reverseflash',
              password: 'downwithbarry'
          })
          .end((err, res) => {
              token = res.body.token;
              done();
              
          });
    });

    it('should let you add a new celeb', () => {
        return app
          .post('/api/protected/celebs')
          .set('Authorization', `${token}`)
          .send({
              name: 'testceleb',
              info: 'testinfo',
              imageurl: 'testimageurl',
              dead: 'false'
          })
          .then(res => {
              expect(res.status)
                .toBe(201)
          });
    });

})

