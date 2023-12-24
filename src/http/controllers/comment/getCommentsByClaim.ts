import mongoose from "mongoose";
import { CommentModel } from "../../../database";
import { Request, Response } from "express";

export const GetCommentsByClaim = async (claimId: mongoose.Types.ObjectId) => {
    const comments = await CommentModel.find({ claimId: claimId }).populate('user', 'username');

    return comments;
}

export const getCommentsByClaim = async (req: Request, res: Response) => {
    const claimId = new mongoose.Types.ObjectId(req.query.claimId as string);

    const comments = await GetCommentsByClaim(claimId);

    res.status(200).json(comments);
}