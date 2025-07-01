const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        unique: true,
        sparse: true,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    displayName: String,
    authProvider: {
        type: String,
        enum: ["wallet", "google"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);
