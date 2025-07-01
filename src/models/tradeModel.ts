import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
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
  pricePerShare: Number,
  totalCost: Number,
  tradeType: {
    type: String,
    enum: ['buy', 'sell'],
  },
  txHash: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Trade', tradeSchema);
