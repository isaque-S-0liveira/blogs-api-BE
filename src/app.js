const express = require('express');
const userController = require('./Controllers/users.controller');
const { validateLogin, validateUser, validateCreatUser } = require('./middlewares/userValidations');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, validateUser, userController.LoginUser);

app.post('/user', validateCreatUser, userController.creatUser);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
