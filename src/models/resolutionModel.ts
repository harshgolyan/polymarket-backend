import mongoose from "mongoose";

const resolutionSchema = new mongoose.Schema({
    marketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Market",
    },
    resolvedBy: String,
    correctOutcomeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outcome",
    },
    txHash: String,
    disputed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Resolution", resolutionSchema);
