import Joi from 'joi';

export const urlModel = Joi.object({
  url: Joi.string().required(),
});
