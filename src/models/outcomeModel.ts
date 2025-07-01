import mongoose from "mongoose";

const outcomeSchema = new mongoose.Schema({
  marketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Market',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  probability: Number,
});

module.exports = mongoose.model('Outcome', outcomeSchema);
