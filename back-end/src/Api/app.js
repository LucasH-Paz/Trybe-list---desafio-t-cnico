const express = require('express');
const bodyParser = require('body-parser');
const Tasks = require('../Controllers/tasksController');

const { handleErrors, validateTask, validateId } = require('../Middlewares/errors');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ mesage: 'pong' });
});

app.get('/tasks', Tasks.getAll);
app.post('/tasks', validateTask, Tasks.addNew);
app.put('/tasks/:id', validateId, validateTask, Tasks.update);
app.delete('/tasks/:id', validateId, Tasks.remove);

app.use(handleErrors);

module.exports = app;
