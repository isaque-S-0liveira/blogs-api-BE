const { User } = require('../models');

const creatUser = (displayName, email, password, image) => User.create({ 
    displayName, 
    email, 
    password, 
    image,
});

const getEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    creatUser,
    getEmail,
};