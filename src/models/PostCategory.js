/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define(
        'PostCategory',
        { 
            postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
          categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
        },
        {
            tableName: 'posts_categories',
            timestamps: false,
            underscored: true
        },
    );


    PostCategoryTable.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategoryTable,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        })

        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'post_id',
            otherKey: 'category_id'
        })
    }
    return PostCategoryTable;
}

module.exports = PostCategorySchema;