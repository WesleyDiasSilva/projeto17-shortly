import Joi from 'joi';

export const newUserModel = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.string().required().min(6),
});
