import mongoose from "mongoose";
const { Schema } = mongoose;

export const claimSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    images: { type: [String], required: false, default: [] },
    upVotes: { type: [Schema.Types.ObjectId], default: [] },
    userOwner: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now, required: false }
},{
    versionKey: false
});

export const ClaimModel = mongoose.model('Claim', claimSchema);