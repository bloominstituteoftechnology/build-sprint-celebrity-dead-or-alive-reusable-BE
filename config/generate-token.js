const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = generateToken;

function generateToken(user) {
    const payload = {
        username: user.username,
        subject: user.id
    };

    const secret = process.env.SECRET || 'the secrets of men are known to few';

    const options = {
        expiresIn: '6h'
    };

    return jwt.sign(payload, secret, options);
};