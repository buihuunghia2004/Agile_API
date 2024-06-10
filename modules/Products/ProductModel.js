const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, require: true },
    catId: { type: String, require: true },
    price: { type: String, default: '' },
    desc: { type: String, require: true },
    qty: Number,
    image: { type: String,require:true},
    inf: {type: Object, default: null}
});

module.exports = mongoose.model("product", ProductSchema);
