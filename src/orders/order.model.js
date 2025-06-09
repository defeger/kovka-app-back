const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String, required: true
         },
    phone: {
        type: String, required: true 
        },
    type: { 
        type: String, required: true
     },
    description: { 
        type: String
     },
    createdAt: {
        type: Date, default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


