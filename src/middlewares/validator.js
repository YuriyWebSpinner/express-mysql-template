const joi = require("joi");
const rc = require("../utils/response-creator");

const joiVars = {
  email: joi.string().required().email(),
  name: joi.string().max(200),
  description: joi.string().max(200),
  status: joi.number().integer().min(0).required(),
  userId: joi.string().uuid(),
  id: joi.number().integer().min(0).required(),
  password: joi.string().max(9),
  level: joi.number().max(9),
  data: joi.object()
};

const id = {
  id: joiVars.id
}

const update = {
  id: joiVars.id,
  data: joiVars.data
}

const login = {
  email: joiVars.email,
  password: joiVars.password.required(),
};

const user = {
  ...login,
  name: joiVars.name.required(),
  level: joiVars.level.required(),
};

const task = {
  name: joiVars.name.required(),
  description: joiVars.description,
  status: joiVars.status,
  user_id: joiVars.userId,
};

const schemas = {
  id,
  update,
  user,
  login,
  task
};

function validate(schema) {
  return (req, res, next) => {
    const { body = {} } = req;
    const { error } = joi.object().keys(schemas[schema]).validate(body);
    next(error);
  };
}

module.exports = validate;
