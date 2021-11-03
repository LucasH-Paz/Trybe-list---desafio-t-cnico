const connect = require('./connection');

const addNew = async (task) => {
  const { insertedId } = await connect.getConnection()
    .then((db) => db.collection('tasks').insertOne(task));
  return insertedId;
};

const update = async (task) => {
  const { id } = task;
  const updatedTask = await connect.getConnection()
    .then((db) => db.collection('tasks').findOneAndUpdate(
      { _id: id },
      { $set : { ...task } },
      { returnNewDocument: true },
    ));
  return updatedTask;
};

const remove = async (id) => {
  const deletedTask = await connect.getConnection()
    .then((db) => db.collection('tasks').findOneAndDelete({ _id: id }));
  return deletedTask;
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
