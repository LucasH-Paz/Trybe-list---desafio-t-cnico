const connect = require('./connection');

const addNew = async (msg) => {
  const { insertedId } = await connect.getConnection()
    .then((db) => db.collection('tasks').insertOne(msg));
  return insertedId;
};

const update = async (task) => {
  const { _id } = task;
  const updatedTask = await connect.getConnection()
    .then((db) => db.collection('tasks').findOneAndUpdate(
      { _id },
      task,
      { returnNewDocument: true },
    ));
  return updatedTask;
};

const remove = async (id) => {
  const updatedTask = await connect.getConnection()
    .then((db) => db.collection('tasks').findOneAndDelete({ _id: id }));
  return updatedTask;
};

const getAll = async () => {
  const tasks = await connect.getConnection()
    .then((db) => db.collection('tasks').find().toArray());
  return tasks;
};

module.exports = {
  addNew,
  update,
  remove,
  getAll,
};
