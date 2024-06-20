var express = require("express");
var router = express.Router();

const AdminController = require("../modules/Admin/AdminController");
// http://localhost:3000/admins/login
router.get("/login", function (req, res) {
    res.render("login");
});
// http://localhost:3000/admins/loginProcess

router.post("/loginProcess", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await AdminController.loginAdmin(username, password);
        if (admin) {
            res.render("index", { msg: "Đăng nhập thành công" });
        } else {
            res.render("login", { msg: "Đăng nhập thất bại" });
        }
    } catch (err) {
        console.log(err);
    }
});

// http://localhost:3000/admin/login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await AdminController.loginAdmin(username, password);
        !!admin
            ? res.json({ status: true, data: admin })
            : res.json({ status: false });
    } catch (err) {
        console.log(err);
    }
});

// http://localhost:3000/admin/addnew

router.post("/addnew", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await AdminController.insert(username, password);

        return res.status(200).json({ status: true, data: admin });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, data: error.message });
    }
});

module.exports = router;
