const express = require('express');
const router = require('./routes');
const computCatalogs = require('./utils/computCatalog');

require('dotenv').config({
  path: process.env.NODE_ENV.trim() === 'test' ? ".env.test" : ".env"
})

class App {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  async middlewares() {
    this.express.use(express.json());
    this.express.use(router);
    this.express.use(this.errorHandler);
    await computCatalogs();
  }

  errorHandler(error, request, response, next) {
    let message = '';
    if (!error.status) {
      message = 'Internal error server';
      console.log('error', error.message);
    } else {
      message = error.message;
    }
    response.status(error.status || 500);
    response.json({ error: message });
  }
}

module.exports = new App().express;