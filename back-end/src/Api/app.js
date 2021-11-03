const express = require('express');
const bodyParser = require('body-parser');

// const { handleErrors } = require('../Middlewares/errors');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ mesage: 'pong' });
});

// app.use(handleErrors);

module.exports = app;
