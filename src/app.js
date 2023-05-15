const express = require('express');
const userController = require('./Controllers/users.controller');
const categoryController = require('./Controllers/categories.controller');
const blogPostController = require('./Controllers/blogPosts.controller');
const {
  validateLogin, 
  validateUser, 
  validateCreatUser, 
  validateId } = require('./middlewares/userValidations');
const validateJWT = require('./middlewares/validateJWT');
const { validateName } = require('./middlewares/categoryValidations');
const { 
  postCategoriesValidate, 
  categoryIdValidate } = require('./middlewares/postCategoriesValidations');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, validateUser, userController.LoginUser);

app.post('/user', validateCreatUser, userController.creatUser);

app.get('/user', validateJWT, userController.getUser);

app.get('/user/:id', validateJWT, validateId, userController.getUserById);

app.post('/categories', validateJWT, validateName, categoryController.creatCategory);

app.get('/categories', validateJWT, categoryController.getAll);

app.post(
'/post', 
 validateJWT, 
 postCategoriesValidate, 
 categoryIdValidate,
blogPostController.creatPostAndCategory,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
