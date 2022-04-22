const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const ChallengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  coupon: { type: ObjectID, required: true },
  category: {
    type: String,
    enum: ['FOOD', 'CARBON', 'MATERIAL', 'OTHER'],
    required: true,
  },
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
