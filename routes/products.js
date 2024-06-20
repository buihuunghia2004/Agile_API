var express = require("express");
var router = express.Router();

var ProductController = require("../modules/Products/ProductController");

router.get("/byCate/:idCate", async function (req, res, next) {
    try {
        const { idCate } = req.params;
        if (idCate) {
            let products;
            if (idCate == "66652b0aad0bb0e5f0400a8e") {
                products = await ProductController.getAll();
            } else {
                products = await ProductController.getProductByCatId(idCate);
            }
            if (products)
                res.status(200).json({ status: true, data: products });
            return null;
        } else return res.status(500).json({ status: false, message: "Id category trống" });
    } catch (error) {
        return res
            .status(500)
            .json({ status: false, message: "Lấy sản phẩm thất bại" });
    }
});

// http://localhost:3000/products/getProductByName
router.get("/getProductByName", async function (req, res, next) {
    try {
        const { name } = req.query;
        const product = await ProductController.getProductByName(name);
        return res.status(200).json({ status: true, data: product });
    } catch (err) {
        console.error("get product by name err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

// http://localhost:3000/products/getAllProduct
router.get("/getAllProduct", async function (req, res, next) {
    try {
        const products = await ProductController.getAll();
        res.status(200).json({ data: products, status: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: false,
            message: "Error fetching",
        });
    }
});

// http://localhost:3000/products/getProductById
router.get("/getProductById", async function (req, res, next) {
    try {
        const { proId } = req.query;
        const product = await ProductController.getProductById(proId);
        return res.status(200).json({ status: true, data: product });
    } catch (err) {
        console.error("get product by id err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

// // http://localhost:3000/products/getProductByCatId
// router.get("/getProductByCatId", async function (req, res, next) {
//     try {
//         let products;
//         const { catId } = req.query;
//         if (catId == "") {
//             products = await ProductController.getAll();
//         } else {
//             products = await ProductController.getProductByCatId(catId);
//         }
//         return res.status(200).json({ status: true, data: products });
//     } catch (err) {
//         console.error("get product by cat id err: ", err);
//         return res.status(500).json({ status: false, error: err });
//     }
// });

// http://localhost:3000/products/addProduct
router.get("/addProduct", async function (req, res, next) {
    try {
        const { name, catId, price, desc, qty, image } = req.query;
        // console.log(req.query);
        const product = await ProductController.insert(
            name,
            catId,
            price,
            desc,
            qty,
            image
        );
        return res.status(200).json({ status: true, data: product });
    } catch (err) {
        console.error("add product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});
// http://localhost:3000/products/updateProduct
router.get("/updateProduct", async function (req, res, next) {
    try {
        const { _id, name, catId, price, desc, qty, image } = req.query;
        const product = await ProductController.update(
            _id,
            name,
            catId,
            price,
            desc,
            qty,
            image
        );
        return res.status(200).json({ status: true, data: product });
    } catch (err) {
        console.error("update product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

// http://localhost:3000/products/removeProduct
router.get("/removeProduct", async function (req, res, next) {
    try {
        const { proId } = req.query;
        ProductController.remove(proId);
        return res.status(200).json({ status: true });
    } catch (err) {
        console.error("remove product err: ", err);
        return res.status(500).json({ status: false, error: err });
    }
});

module.exports = router;
