import { Request, Response } from "express";
import { ClaimModel } from "../../../database";
import mongoose from "mongoose";

export const GetClaimById = async (claimId: mongoose.Types.ObjectId) => {
    const claim = await ClaimModel.findOne({ _id: claimId }).populate('userOwner', 'username');
    return claim;
}

export const getClaimById = async (req: Request, res: Response) => {
    const claimId = new mongoose.Types.ObjectId(req.params.id);

    const claim = await GetClaimById(claimId);
    if (!claim) {
        return res.status(404).send({ message: "No existe el reclamo que busca" });
    }

    res.status(200).json(claim);
}