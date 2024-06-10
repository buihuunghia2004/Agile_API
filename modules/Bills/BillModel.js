const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillSchema = new Schema({
    userId: { type: ObjectId, ref: "user" },
    products: [
        {
            productId: { type: ObjectId, ref: "product" },
            qty: Number,
        },
    ],
    create_at: { type: Date, default: Date.now },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("bill", BillSchema);
