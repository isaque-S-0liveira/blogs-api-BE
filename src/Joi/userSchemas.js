const Joi = require('joi');

const loginUserSchemas = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
}).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

const creatUserSchemas = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

module.exports = {
    loginUserSchemas,
    creatUserSchemas,
};