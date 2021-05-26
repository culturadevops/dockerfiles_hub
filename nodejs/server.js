'use strict';

const express = require('express');
const config = require('./config.js');
// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);