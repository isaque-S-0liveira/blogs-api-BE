const userService = require('../Services/users.service');
const authToken = require('../auth/createToken');

const creatUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    await userService.creatUser(displayName, email, password, image);

    const token = authToken.token(email);
    return res.status(201).json({ token });
};

const LoginUser = async (req, res) => {
   const { email } = req.body;
   const token = authToken.token(email);
   return res.status(200).json({ token });
};

module.exports = {
    LoginUser,
    creatUser,
};
