const Joi = require('joi');

const loginUserSchemas = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
}).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

module.exports = {
    loginUserSchemas,
};