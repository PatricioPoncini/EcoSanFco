import mongoose, { Schema } from "mongoose";
import { IComment } from "../types";

export const commentSchema = new Schema<IComment>({
    claimId: { type: Schema.Types.ObjectId, ref: "Claim" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: false }
}, {
    versionKey: false,
});

export const CommentModel = mongoose.model<IComment>('Comment', commentSchema);