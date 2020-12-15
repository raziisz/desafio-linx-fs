const express = require('express');

class App {
  constructor() {
    this.express = express();
    this.middleware();
  }

  middleware() {
    this.express.use(express.json());
  }
}

module.exports = new App().express;