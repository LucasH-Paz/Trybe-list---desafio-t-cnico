const Tasks = require('../Services/tasksService');

const addNew = async (req, res, next) => {
  const { title, description, status } = req.body;
  createdAt = new Date();
  const taskObj = { title, description, status, createdAt };

  const result = await Tasks.addNew(taskObj);
  if (result.message) return next(result);
  return res.status(201).json({ result: { id: result, ...taskObj } });
};

const update = async (req, res, next) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  const result = await Tasks.update({ title, description, status }, id);
  if (result.message) return next(result);
  return res.status(201).json({ result });
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  const result = await Tasks.remove(id);
  if (result.message) return next(result);
  return res.status(200).json({ result: 'succesfully removed' });
};

const getAll = async (req, res, next) => {
  const result = await Tasks.getAll();
  if (result.message) return next(result);
  return res.status(200).json({ result });
};

module.exports = {
  addNew,
  update,
  remove,
  getAll,
};
