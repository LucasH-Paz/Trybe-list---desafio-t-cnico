const connect = require('./connection');

const addNew = async (msg) => {
  const { insertedId } = await connect.getConnection()
    .then((db) => db.collection('tasks').insertOne(msg));
  return insertedId;
};

const updateOne = async (task) => {
  const { _id } = task;
  const updatedTask = await connect.getConnection()
    .then((db) => db.collection('tasks').findOneAndUpdate(
      { _id },
      task,
      { returnNewDocument: true },
    ));
  return updatedTask;
};

module.exports = {
  addNew,
  updateOne,
};
