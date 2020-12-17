const express = require('express');
const router = require('./routes');
const app = express();

//middlewares

app.use(express.json());
app.use(router);

app.use(function (error, request, response, next) {
  let message = '';
  if (!error.status) {
    message = 'Internal error server';
    console.log('error', error.message);
  } else {
    message = error.message;
  }
  response.status(error.status || 500);
  response.json({ error: message });
});

module.exports = app;