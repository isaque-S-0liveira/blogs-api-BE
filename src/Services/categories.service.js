const { Category } = require('../models');

const creatCategory = (name) => Category.create({ name });
const getAll = () => Category.findAll();

module.exports = {
    creatCategory,
    getAll,
};