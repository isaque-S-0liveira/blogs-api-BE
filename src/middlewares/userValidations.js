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
    const { email } = req.body;
    const hasUser = await userService.getEmail(email);
    if (!hasUser) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

const validateCreatUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const { error } = schemmas.creatUserSchemas.validate({
        displayName, email, password,
    });
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    const hasEmail = await userService.getEmail(email);

    if (hasEmail) {
        return res.status(409).json({ message: 'User already registered' });
     }
    next();
};

const validateId = async (req, res, next) => {
   const { id } = req.params;
   const allUsers = await userService.getUser();
   const trueID = allUsers.find((el) => el.id === Number(id));
   if (!trueID) {
    return res.status(404).json({ message: 'User does not exist' });
   }
  next();
};

module.exports = {
    validateLogin,
    validateUser,
    validateCreatUser,
    validateId,
};
