const blogPostService = require('../Services/blogPosts.service');

const creatPostAndCategory = async (req, res) => {
    const { data: userId } = req.payload;
    const blogPost = await blogPostService.creatPostAndCategory(req.body, userId);
     return res.status(201).json(blogPost);
};

const getAllBlogPosts = async (__req, res) => {
    const allBlogPosts = await blogPostService.getAllBlogPosts();
    return res.status(200).json(allBlogPosts);
};

const getByIdBlogPost = async (req, res) => {
    const { id } = req.params;
    const blogPost = await blogPostService.getByIdBlogPost(Number(id));
    return res.status(200).json(blogPost);
};

module.exports = {
    creatPostAndCategory,
    getAllBlogPosts,
    getByIdBlogPost,
};