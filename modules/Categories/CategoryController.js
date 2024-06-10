const CategoryModel = require("./CategoryModel");

const getAll = async () => {
    try {
        const categories = await CategoryModel.find({});
        return categories;
    } catch (error) {
        console.log(error);
    }
};

const getCateById = async (id) => {
    try {
        const cate = await CategoryModel.findOne({ _id: id });
        return cate;
    } catch (error) {
        console.log(error);
    }
};
const getCateByName = async (cateName) => {
    try {
        const cate = await CategoryModel.findOne({ name: cateName });
        return cate._id;
    } catch (error) {
        console.log(error);
    }
};

const insert = async (name) => {
    try {
        const category = new CategoryModel({ name });
        await category.save();
        return category;
    } catch (error) {
        console.log(error);
    }
};

const update = async (catId, name) => {
    try {
        const category = CategoryModel.findByIdAndUpdate(catId, {
            name,
        });
        return category;
    } catch (error) {
        console.log(error);
    }
};

const remove = async (catId) => {
    try {
        await CategoryModel.deleteOne({ _id: catId });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAll,
    insert,
    update,
    remove,
    getCateById,
    getCateByName,
};
