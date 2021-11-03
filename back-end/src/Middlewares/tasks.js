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

module.exports = {
  validateTask,
};
