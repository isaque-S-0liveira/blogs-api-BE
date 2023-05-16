const blogPostService = require('../Services/blogPosts.service');

const postCategoriesValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const categoryIdValidate = async (req, res, next) => {
    const { categoryIds } = req.body;
    const validate = await blogPostService.categoryIdValidation(categoryIds);
    const hasNull = validate.some((category) => category === null);
    if (hasNull) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
};

const blogPostIdValidate = async (req, res, next) => {
    const { id } = req.params;
    const validate = await blogPostService.blogPostIdValidation(id);
    if (!validate) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    console.log(validate);
    next();
};

const validateAuthUser = async (req, res, next) => {
    const { id } = req.params;
    const { data } = req.payload;
    const blogPost = await blogPostService.getByIdBlogPost(id);
    if (blogPost.userId !== data) {
        console.log('deu ruim', blogPost.id, data);
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    console.log('deu bom', blogPost.id, data);
    next();
}; 

const blogPostUpdatedValidate = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = { 
    postCategoriesValidate, 
    categoryIdValidate, 
    blogPostIdValidate, 
    validateAuthUser,
    blogPostUpdatedValidate,
};