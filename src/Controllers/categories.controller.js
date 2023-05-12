const categoryService = require('../Services/categories.service');

const creatCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.creatCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    creatCategory,
};