/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const UserSchema = (sequelize, DataTypes) => {
    const userTable = sequelize.define(
        'User',
        {
         id: DataTypes.INTEGER,
         displayName: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.STRING,
         image: DataTypes.STRING,
        },
        {
            tableName: 'users',
            timestamps: false,
            underscored: true,
        },
    );
    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'blogPosts'
        })
    }

    return userTable;

}

module.exports = UserSchema;