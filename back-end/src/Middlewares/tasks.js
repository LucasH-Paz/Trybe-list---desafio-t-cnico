const { ObjectID } = require('bson');
const Joi = require('joi');
const { builtError } = require('../Services/helpers');

const taskSchema = Joi.object({
  tilte: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

const validateTask = (req, _res, next) => {
  const check = taskSchema.validate(req.body);
  return check.error ? next(check.error) : next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;
  return ObjectID.isValid(id) ? next() : next(builtError(404, 'Id invalid'));
};

module.exports = {
  validateTask,
  validateId,
};
