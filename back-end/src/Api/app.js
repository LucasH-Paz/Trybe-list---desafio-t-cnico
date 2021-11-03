const express = require('express');
const bodyParser = require('body-parser');
const Tasks = require('../Controllers/tasksController');

const { handleErrors } = require('../Middlewares/errors');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ mesage: 'pong' });
});

app.get('/tasks', Tasks.getAll);
app.post('/tasks', Tasks.addNew);
app.put('/tasks/:id', Tasks.update);
app.delete('/tasks/:id', Tasks.remove);

app.use(handleErrors);

module.exports = app;
