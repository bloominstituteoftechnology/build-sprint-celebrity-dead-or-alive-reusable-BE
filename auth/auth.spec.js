const request = require('supertest');
const server = require('../api/server.js');
const jwt = require('jsonwebtoken');
const app = request(server)

describe('no auth needed', () => {

    it('GET /api/celebs comes back as 200 OK', async () => {
        const res = await request(server).get('/api/celebs')
        expect(res.status)
          .toBe(200);
    });

    it('GET /api/celebs/:id comes back as 200 OK', async () => {
        const res = await request(server).get('/api/celebs/1')
        expect(res.status)
          .toBe(200);
    });

    it('POST /api/register adds a new user', done => {
        return app
          .post('/api/register')
          .set('Accept', 'application/json')
          .send({
              username: 'reverseflash',
              password: 'downwithbarry'
          })
          .expect(201)
          .expect('Content-Type', /json/i)
          .then(res => {
              id = res.body.id;
              expect(res.body.username)
                .toEqual('test2');
              done();
          });
    });

    it('POST /api/login logs a user in', done => {
        return app
          .post('/api/login')
          .send({
              username: 'reverseflash',
              password: 'downwithbarry'
          })
          .expect(200, done);
    });

})