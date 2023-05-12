/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const BlogPostSchema = (sequelize, DataTypes) => {
    const blogPostTable = sequelize.define(
        'BlogPost',
        {
         id: {
            primaryKey:true,
            autoIncrement: true, 
           type: DataTypes.INTEGER,
         },
         title: DataTypes.STRING,
         content: DataTypes.STRING,
         userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
         },
         published: {
            type: DataTypes.DATE,
            field: 'published', 
          },
          updated: {
            type: DataTypes.DATE,
            field: 'updated',
          },
        },
        {
            tableName: 'blog_posts',
            timestamps: true,
            underscored: true
        },
    );

    blogPostTable.associate = (models) => {
        blogPostTable.hasMany(models.PostCategory, {
            foreignKey: 'postId',
            as: 'PostsCategories'
        })
    }

    blogPostTable.associate = (models) => {
        blogPostTable.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'users'
        })
    }

    return blogPostTable;
}

module.exports = BlogPostSchema;