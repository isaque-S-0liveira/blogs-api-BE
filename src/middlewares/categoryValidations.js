const categorySchema = require('../Joi/categorySchemas');

const validateName = (req, res, next) => {
    const { name } = req.body;
    const { error } = categorySchema.validate({ name });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    next();
};

module.exports = {
    validateName,
};