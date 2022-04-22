const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  ownedCoupon: { type: [ObjectID] },
  role: {
    type: String,
    enum: ['USER', 'COMPANY'],
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
