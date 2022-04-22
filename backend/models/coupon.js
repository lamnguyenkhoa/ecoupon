const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  company: { type: String, required: true },
  validBefore: { type: Date, required: true },
  remaining: { type: Number, required: true },
});

module.exports = mongoose.model('Coupon', CouponSchema);
