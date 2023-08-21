const { Schema, model } = require('mongoose');

const BinSchema = new Schema({
    location: { type: String },
    isAvailable: { type: Boolean, default: true },
    qtyOrders: { type: Number, default: 0 },
    orders: { type: [String] }
  });


module.exports = model('Bin', BinSchema);


