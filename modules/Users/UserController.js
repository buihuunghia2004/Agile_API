const UserModel = require("./UserModel");
const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');

const register = async (name, email, phone, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({ name, email, phone, password: hash });
    await user.save();
    return user;
};

const findUser = async (email) => {
    const user = await UserModel.findOne({ email });
    return user;
};
const login = async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }
    return null;
};


module.exports = { register, login, findUser };
