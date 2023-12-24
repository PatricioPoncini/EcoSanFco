import mongoose from "mongoose";
import { CommentModel } from "../../../database";
import { Request, Response } from "express";

export const PostComment = async (userId: mongoose.Types.ObjectId, claimId: mongoose.Types.ObjectId, content: string) => {
    return await CommentModel.create({ claimId, userId, content });
}

export const postComment = async (req: Request, res: Response) => {
    const userId = new mongoose.Types.ObjectId(req.query.userId as string);
    const claimId = new mongoose.Types.ObjectId(req.query.claimId as string);
    const { content } = req.body as { content: string };

    const comment = await PostComment(userId, claimId, content);

    res.status(201).json(comment);
}