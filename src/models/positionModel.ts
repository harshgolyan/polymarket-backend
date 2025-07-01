import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
  },
  marketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Market',
    required: true,
  },
  outcomeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Outcome',
    required: true,
  },
  shares: Number,
  avgPrice: Number,
});

module.exports = mongoose.model('Position', positionSchema);
