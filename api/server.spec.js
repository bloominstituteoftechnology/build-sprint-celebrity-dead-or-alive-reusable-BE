const request = require('supertest');
const server = require('./server.js');

describe('server', () => {

    it('tests that it is using the testing environment', () => {
        expect(process.env.DB_ENV)
          .toBe('testing');
    });

    it('GET /api returns 200 OK', async () => {
        const res = await request(server).get('/api')
        expect(res.status)
          .toBe(200)
    });

    it('GET invalid route returns 404', async () => {
        const res = await request(server).get('/legionofdoom')
        expect(res.status)
          .toBe(404);
    });

    it('GET /api/celebs comes back as 200 OK', async () => {
        const res = await request(server).get('/api/celebs')
        expect(res.status)
          .toBe(200);
    });

    it('GET /api/protected/users returns auth error 400 without token', async () => {
        const res = await request(server).get('/api/protected/users')
        expect(res.status)
          .toBe(400);
    })
})
    