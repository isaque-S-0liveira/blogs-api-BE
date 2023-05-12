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
            primaryKey:true,
            autoIncrement: true, 
           type: DataTypes.INTEGER,
         },
         name: DataTypes.STRING,
        },
        {
            tableName: 'categories',
            timestamps: false,
        },
    );

    return categoryTable;
}

module.exports = CategorySchema;