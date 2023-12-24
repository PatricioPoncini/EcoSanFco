import mongoose, { Schema } from "mongoose";
import { IClaim } from "../types";

export const claimSchema = new Schema<IClaim>({
    title: { type: String, required: true },
    description: { type: String, required: true, default: "" },
    images: { type: [String], required: false, default: [] },
    upVotes: { type: [String], default: [] },
    userOwner: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now, required: false }
}, {
    versionKey: false
});

export const ClaimModel = mongoose.model<IClaim>('Claim', claimSchema);