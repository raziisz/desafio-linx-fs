const express = require('express');
const router = require('./routes');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerDefinitions.json');
const computCatalogs = require('./utils/computCatalog');

require('dotenv').config({
  path: process.env.NODE_ENV.trim() === 'test' ? ".env.test" : ".env"
})

const app = express();

const options = {
  definition: swaggerDefinition,
  apis: ['./routes.js']
};

app.use(express.json());
app.use(cors());
app.use(router);

//swagger
let swaggerSpec = swaggerJsDoc(options);
app.use('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec)
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//comput catalogs from json
computCatalogs();


//handle error
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