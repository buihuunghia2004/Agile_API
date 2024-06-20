const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const AdminModel = require("./AdminModel");

const loginAdmin = async (username, password) => {
    try {
        const admin = await AdminModel.findOne({
            username: username,
            password: password,
        });
        return admin;
    } catch (error) {
        console.log(error);
    }
};

const insert = async (username, password) => {
    try {
        const admin = new AdminModel({username, password});
        await admin.save();
        return admin;
    } catch (error) {
        console.log(error);
    }
};
const changePassword = async (id, newPassword) => {
    try {
    } catch (error) {}
};
module.exports = { loginAdmin, insert, changePassword };
