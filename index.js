require('dotenv').config();

// Import packages
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const app = express();

// Define constants
const PORT = process.env.PORT || 8000;

// Import controllers
const rootController = require('./controllers/root');
const pingController = require('./controllers/ping');

(async function main() {
  // Use middlewares
  app.use(morgan('tiny'));

  // Use controllers
  app.use('/', rootController);
  app.use('/ping', pingController);

  // Start server
  http.createServer(app).listen(PORT, () => {
    console.log(`Test server started on ${PORT}`);
  });
})();
