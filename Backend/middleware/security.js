const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const securityMiddleware = [
  helmet(),
  mongoSanitize(),
  xss()
];

module.exports = securityMiddleware;