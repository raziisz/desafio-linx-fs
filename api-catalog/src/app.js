const express = require('express');

class App {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(this.errorHandler);
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