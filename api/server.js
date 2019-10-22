const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const celebRouter = require('../protected/celeb-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api/protected', auth, celebRouter );

server.get('/api', (req, res) => {
    res.json({ api: 'Up AND running!'});
});

module.exports = server;