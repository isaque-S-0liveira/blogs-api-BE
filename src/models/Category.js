/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const CategorySchema = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define(
        'Category',
        {
         id: {
           type: DataTypes.INTEGER,
           primaryKey:true,
         },
         name: DataTypes.STRING,
        },
        {
            tableName: 'categories',
            timestamps: false,
            underscored: true,
        },
    );
    return categoryTable;
}

module.exports = CategorySchema;