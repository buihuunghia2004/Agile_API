var express = require("express");
var router = express.Router();

const UserController = require("../modules/Users/UserController");

router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const existingUser = await UserController.findUser(email);
        if (existingUser) {
            return res.json({ status: false, message: "Tài khoản đã tồn tại" });
        }
        const user = await UserController.register(
            name,
            email,
            phone,
            password
        );

        res.status(200).json({ status: true, data: user });
    } catch (err) {
        console.error(err);
    }
});

// http://localhost:3000/users/login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserController.login(email, password);
        !!user
            ? res.status(200).json({ status: true, data: user })
            : res.status(500).json({ status: false, data: user });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
