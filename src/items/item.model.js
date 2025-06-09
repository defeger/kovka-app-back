const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
   img: {
        type: String,
        required: true
   },
   images: {
        type: [String], // массив ссылок на картинки
        default: []
   },
   description: {
        type: String,
        required: true
   },
   category: {
        type: String,
        required: true
   },
   title: {
        type: String,
        required: true
   },
   alt: {
        type: String,
        required: true
   }
},{
    timestamps: true
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
