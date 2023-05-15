const blogPostService = require('../Services/blogPosts.service');

const creatPostAndCategory = async (req, res) => {
    const { data: userId } = req.payload;
    const blogPost = await blogPostService.creatPostAndCategory(req.body, userId);
     return res.status(201).json(blogPost);
};

module.exports = {
    creatPostAndCategory,
};