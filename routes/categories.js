var express = require("express");
var router = express.Router();
var CategoryController = require("../modules/Categories/CategoryController");
// get All
// http://localhost:3000/categories/getAllCategory
router.get("/getAllCategory", async function (req, res, next) {
    try {
        const categories = await CategoryController.getAll();
        res.status(200).json({ data: categories, status: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: false,
            message: "Error fetching",
        });
    }
});

// http://localhost:3000/categories/getCateById
router.get("/getCateById", async function (req, res, next) {
    try {
        const { id } = req.query;
        const cate = await CategoryController.getCateById(id);
        res.json({ item: cate });
    } catch (err) {
        console.error(err);
    }
});

router.get("/getCateByName", async function (req, res, next) {
    try {
        const { cateName } = req.query;
        const cate = await CategoryController.getCateByName(cateName);
        res.json({ item: cate });
    } catch (err) {
        console.error(err);
    }
});

// http://localhost:3000/categories/addCategory
router.get("/addCategory", async function (req, res, next) {
    try {
        const { name } = req.query;
        // console.log(req.query);
        const category = await CategoryController.insert(name);
        return res.status(200).json({ status: true, data: category });
    } catch (err) {
        console.error("add product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

// http://localhost:3000/categories/updateCategory
router.get("/updateCategory", async function (req, res, next) {
    try {
        const { catId, name } = req.query;
        const category = await CategoryController.update(catId, name);
        return res.status(200).json({ status: true, data: category });
    } catch (err) {
        console.error("update product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

// http://localhost:3000/categories/removeCategory
router.get("/removeCategory", async function (req, res, next) {
    try {
        const { catId } = req.query;

        if (!catId) {
            return res.status(400).json({ message: "Không tồn tại Id này" });
        }

        CategoryController.remove(catId);
        return res.status(200).json({ status: true });
    } catch (err) {
        console.error("Remove product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

module.exports = router;
