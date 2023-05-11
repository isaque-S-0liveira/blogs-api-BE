const userService = require('../Services/users.service');
const authToken = require('../auth/createToken');

const creatUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    await userService.creatUser(displayName, email, password, image);

    const token = authToken.generateToken(email);
    return res.status(201).json({ token });
};

const LoginUser = async (req, res) => {
   const { email } = req.body;
   const token = authToken.generateToken(email);
   return res.status(200).json({ token });
};

const getUser = async (__req, res) => {
    const users = await userService.getUser();
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
};

module.exports = {
    LoginUser,
    creatUser,
    getUser,
    getUserById,
};
