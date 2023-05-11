const { User } = require('../models');

const creatUser = (email, password) => User.create({ email, password });

const getEmailandPassword = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
    creatUser,
    getEmailandPassword,
};