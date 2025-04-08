// models/Gadget.js
const mongoose = require("mongoose");

const gadgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 100 },
  rating: { type: Number, default: 4.5 },
});

const Gadget = mongoose.model("Gadget", gadgetSchema);

module.exports = Gadget;
