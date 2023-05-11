// const userService = require('../Services/users.service');
const authToken = require('../auth/createToken');

const creatUser = async (req, res) => {
    const { email } = req.body;
   // await userService.creatUser(email, password);
    const token = authToken.token(email);
    console.log(email);
    return res.status(200).json({ token });
};

module.exports = {
    creatUser,
};
