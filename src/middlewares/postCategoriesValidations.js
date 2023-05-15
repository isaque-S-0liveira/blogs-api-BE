const { categoryIdValidation, blogPostIdValidation } = require('../Services/blogPosts.service');

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

const blogPostIdValidate = async (req, res, next) => {
    const { id } = req.params;
    const validate = await blogPostIdValidation(id);
    if (!validate) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    console.log(validate);
    next();
};

module.exports = { postCategoriesValidate, categoryIdValidate, blogPostIdValidate };