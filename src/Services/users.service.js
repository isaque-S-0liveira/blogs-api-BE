const { User } = require('../models');

const creatUser = (displayName, email, password, image) => User.create({ 
    displayName, 
    email, 
    password, 
    image,
});

const getEmail = (email) => User.findOne({ where: { email } });

const loginUser = (email) => {
    const user = User.findOne({
        where: { email },
    });
    return user;
};

const getUser = () => User.findAll({
    attributes: { exclude: ['password'] },
});

const getUserById = (id) => {
    const user = User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });
    return user;
};

const deleteUser = (id) => User.destroy({ where: { id } }); 

module.exports = {
    creatUser,
    getEmail,
    getUser,
    getUserById,
    loginUser,
    deleteUser,
};