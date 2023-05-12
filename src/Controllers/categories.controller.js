const categoryService = require('../Services/categories.service');

const creatCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.creatCategory(name);
    return res.status(201).json(category);
};

const getAll = async (req, res) => {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
};

module.exports = {
    creatCategory,
    getAll,
};