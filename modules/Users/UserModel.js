const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    cart: { type: Array, default: [] },
});

module.exports = mongoose.model("user", UserSchema);
