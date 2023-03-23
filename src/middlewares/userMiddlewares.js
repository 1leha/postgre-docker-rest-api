const Joi = require("joi");
const { BadRequest } = require("../utils/errorHandler");

exports.createUserValidation = (req, res, next) => {
  const { error, value } = Joi.object({
    username: Joi.string().min(3).max(255).trim(),
    email: Joi.string().email().required().trim(),
    role: Joi.string().default("user"),
    firstname: Joi.string().min(3).max(255).trim(),
    lastname: Joi.string().min(3).max(255).trim(),
    state: Joi.string().trim(),
  }).validate(req.body);

  if (error) {
    const errorField = error.details[0].context.key;
    throw new BadRequest(`Field '${errorField}' is not valid`);
  }

  req.body = value;
  next();
};

exports.updateUserValidation = (req, res, next) => {
  const { error, value } = Joi.object({
    username: Joi.string().min(3).max(255).trim(),
    email: Joi.string().email().trim(),
    role: Joi.string().default("user"),
    firstname: Joi.string().min(3).max(255).trim(),
    lastname: Joi.string().min(3).max(255).trim(),
    state: Joi.string().trim(),
  }).validate(req.body);

  if (error) {
    const errorField = error.details[0].context.key;
    throw new BadRequest(`Field '${errorField}' is not valid`);
  }

  req.body = value;
  next();
};
