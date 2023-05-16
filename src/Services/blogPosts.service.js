const { BlogPost, Category, PostCategory, User } = require('../models');

const categoryIdValidation = async (categoryIds) => {
  const validation = await Promise.all(
    categoryIds.map((categoryId) => Category.findByPk(categoryId)),
  );
   console.log(validation);
   return validation;
};

const blogPostIdValidation = (id) => BlogPost.findByPk(id);

const creatPostAndCategory = async ({ title, content, categoryIds }, userId) => {
    const blogPost = await BlogPost.create({
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(),
      });

      const categories = await Category.findAll({ where: { id: categoryIds } });
    
      const postCategories = categories.map((category) => ({
        postId: blogPost.id,
        categoryId: category.id,
      }));

      await PostCategory.bulkCreate(postCategories);
    
      return blogPost;
};

const getAllBlogPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
],
}); 

const getByIdBlogPost = (id) => BlogPost.findOne({ 
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
],
});

const updatedPost = ({ title, content }, id) => 
BlogPost.update(
  { title, content },
   { where: { id } },
  );

module.exports = { 
  creatPostAndCategory, 
  categoryIdValidation, 
  getAllBlogPosts,
  getByIdBlogPost,
  blogPostIdValidation,
  updatedPost,
};