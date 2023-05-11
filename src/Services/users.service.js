const { User } = require('../models');

const creatUser = (displayName, email, password, image) => User.create({ 
    displayName, 
    email, 
    password, 
    image,
});

const getEmail = (email) => User.findOne({ where: { email } });

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

module.exports = {
    creatUser,
    getEmail,
    getUser,
    getUserById,
};