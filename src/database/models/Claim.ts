import mongoose from "mongoose";
const { Schema } = mongoose;

export const claimSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    images: { type: [String], required: false, default: [] },
    upVotes: { type: Number, default: 0 },
    userOwner: { type: Schema.Types.ObjectId, ref: "User" }
});

export const ClaimModel = mongoose.model('Claim', claimSchema);