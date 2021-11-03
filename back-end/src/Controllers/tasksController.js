const Tasks = require('../Services/tasksService');

const addNew = async (req, res, next) => {
  const { title, description, status } = req.body;
  createdAt = new Date();
  const taskObj = { title, description, status, createdAt };

  const result = await Tasks.addNew(taskObj);
  if (result.message) return next(result);
  
  return res.status(201).json({ result: { id: result, ...taskObj } });
};

const update = async (req, res, next) => {};

const remove = async (req, res, next) => {};

const getAll = async (req, res, next) => {};

module.exports = {
  addNew,
  update,
  remove,
  getAll,
};
