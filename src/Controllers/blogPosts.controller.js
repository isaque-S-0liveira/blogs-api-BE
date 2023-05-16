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

const updatedPost = async (req, res) => {
    const { id } = req.params;
    const reqBody = req.body;
    await blogPostService.updatedPost(reqBody, id);
    const blogPost = await blogPostService.getByIdBlogPost(id);
    return res.status(200).json(blogPost);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    await blogPostService.deletePost(Number(id));
    return res.status(204).end();
};

module.exports = {
    creatPostAndCategory,
    getAllBlogPosts,
    getByIdBlogPost,
    updatedPost,
    deletePost,
};