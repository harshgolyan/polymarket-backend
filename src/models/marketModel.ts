import mongoose from "mongoose";

const marketSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    description: String,
    category: String,
    creatorWallet: String,
    status: {
        type: String,
        enum: ["open", "closed", "resolved"],
        default: "open",
    },
    closesAt: Date,
    resolvedAt: Date,
    correctOutcomeId: { type: mongoose.Schema.Types.ObjectId, ref: "Outcome" },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Market", marketSchema);
