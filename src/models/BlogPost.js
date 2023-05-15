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
         userId: DataTypes.INTEGER,
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
            timestamps: false,
            underscored: true
        },
    );

    blogPostTable.associate = (models) => {
      blogPostTable.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        targetKey: 'id'
    });
    }

    return blogPostTable;
}

module.exports = BlogPostSchema;