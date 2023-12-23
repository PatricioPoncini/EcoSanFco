import { Request, Response } from "express";
import { ClaimModel } from "../../../database";
import mongoose from "mongoose";

const LikeClaim = async (userId: mongoose.Types.ObjectId, claimId: mongoose.Types.ObjectId) => {
    const claim = await ClaimModel.findOne({ _id: claimId });
    if (!claim) {
        // return http response (add error middleware)
        throw new Error("El reclamo que busca no existe");
    }

    const userIdExist = claim.upVotes.includes(userId);

    if (userIdExist) {
        const indexUserIdToDelete = claim.upVotes.indexOf(userId);
        claim.upVotes.splice(indexUserIdToDelete);
        await claim.save();
        return claim;
    }

    claim.upVotes.push(userId);
    await claim.save();

    return claim;
}

export const likeClaim = async (req: Request, res: Response) => {
    const claimId = new mongoose.Types.ObjectId(req.params.claimId);
    const userId = new mongoose.Types.ObjectId(req.params.userId);

    const claim = await LikeClaim(userId, claimId);

    res.status(201).json({ claim });
}