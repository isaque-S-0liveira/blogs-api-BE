const { categoryIdValidation } = require('../Services/blogPosts.service');

const postCategoriesValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const categoryIdValidate = async (req, res, next) => {
    const { categoryIds } = req.body;
    const validate = await categoryIdValidation(categoryIds);
    const hasNull = validate.some((category) => category === null);
    if (hasNull) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
};

module.exports = { postCategoriesValidate, categoryIdValidate };