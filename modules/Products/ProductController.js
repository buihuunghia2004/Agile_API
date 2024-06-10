const ProductModel = require("./ProductModel");
const CategoryModel = require("../Categories/CategoryModel");
const CategoryController = require("../Categories/CategoryController");
const mongoose = require('mongoose')
const getAll = async () => {
    try {
        const products = await ProductModel.find();
        console.log(products)
        if (products) return products;
        return null
    } catch (error) {
        console.log(error);
    }
};
// get Products By Cate Name
const getProductByCateName = async (cateName) => {
    try {
        const cateId = await CategoryController.getCateByName(cateName);
        console.log(cateId);
        const products = await ProductModel.find({ catId: cateId });
        console.log(products);
        return products;
    } catch (error) {
        console.log(error);
    }
};
const getProductByName = async (namePro) => {
    try {
        const products = await ProductModel.findOne({ name: namePro });
        return products;
    } catch (error) {
        console.log(error);
    }
};
const getProductById = async (proId) => {
    try {
        const product = await ProductModel.findById({ _id: proId });
        console.log(product);
        return product;
    } catch (error) {
        console.log(error);
    }
};
const getProductByCatId = async (catId) => {
    try {
        const products = await ProductModel.find({ catId: catId.toString()});
        console.log(products)
        return products;
    } catch (error) {
        console.log(error.message);
    }
};
const insert = async (name, catId, price, desc, qty, image) => {
    try {
        const product = new ProductModel({
            name,
            catId,
            price,
            desc,
            qty,
            image,
        });
        await product.save();
        return product;
    } catch (error) {
        console.log(error);
    }
};
const update = async (_id, name, catId, price, desc, qty, image) => {
    try {
        const product = ProductModel.findByIdAndUpdate(_id, {
            name, catId, price, desc, qty, image
        });
        return product;
    } catch (error) {
        console.log(error);
    }
};
const remove = async (proId) => {
    try {
        await ProductModel.deleteOne({ _id: proId });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAll,
    insert,
    remove,
    getProductByName,
    update,
    getProductById,
    getProductByCatId,
    getProductByCateName,
};
//LƯU Ý: các trường truyền vào phải đúng với các thuộc tính (tên, vị trí)
// Với id là ObjectId , tên thuộc tính id mặc định là : _id
