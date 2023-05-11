const schemmas = require('../Joi/userSchemas');
const userService = require('../Services/users.service');

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const { error } = schemmas.loginUserSchemas.validate({ email, password });
    console.log(error);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

const validateUser = async (req, res, next) => {
    const { email, password } = req.body;
    const hasUser = await userService.getEmailandPassword(email, password);
    if (!hasUser) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

module.exports = {
    validateLogin,
    validateUser,
};
