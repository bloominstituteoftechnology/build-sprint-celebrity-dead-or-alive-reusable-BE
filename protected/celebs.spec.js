const request = require('supertest');
const server = require('../api/server.js');
const jwt = require('jsonwebtoken');
const app = request(server);

let id;
let token;

let user = {
    username: 'reverseflash',
    password: 'downwithbarry'
};

beforeAll(async () => {
    token = jwt.sign({sub: 1, name: user.username}, process.env.SECRET, {
        expiresIn: '8h'
    });
});

describe('celebs', () => {
    

    it('GET /api/protected/users returns auth error 400 without token', async () => {
        const res = await request(server).get('/api/protected/users')
        expect(res.status)
          .toBe(400);
    })
})