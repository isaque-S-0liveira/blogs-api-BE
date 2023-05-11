const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d', 
    algorithm: 'HS256',
  };

const generateToken = (data) => jwt.sign({ data }, secret, jwtConfig);
const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
    generateToken,
    verifyToken,
};
