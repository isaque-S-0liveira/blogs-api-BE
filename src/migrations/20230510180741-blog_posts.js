'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('blog_posts', {
   id: {
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
     type: Sequelize.INTEGER,
   },
   title: {
     type: Sequelize.STRING,
   },
   content: {
     type: Sequelize.STRING,
   },
   userId: {
     allowNull: false,
     type: Sequelize.INTEGER,
     field: 'user_id',
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE',
     references: {
      model: 'users',
      key: 'id',
    },
   },
   published: {
     type: Sequelize.DATE,
   },
   updated: {
    type: Sequelize.DATE,
   }
  })
 },

 down: async (queryInterface, __Sequelize) => {
   await queryInterface.dropTable('blog_posts');
 }
};