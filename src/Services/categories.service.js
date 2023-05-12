const { Category } = require('../models');

const creatCategory = (name) => Category.create({ name });

module.exports = {
    creatCategory,
};