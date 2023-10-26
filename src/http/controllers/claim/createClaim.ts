import mongoose from "mongoose";
import { Request, Response } from "express";
import { ClaimModel } from "../../../database";
import { IClaimBodyData } from "../../types";

const SaveClaim = async (claimData: IClaimBodyData) => {
    const newClaim = new ClaimModel(claimData);

    await newClaim.save();

    return newClaim;
}

export const createClaim = async (req: Request, res: Response) => {
    const claimData = req.body as IClaimBodyData;
    claimData.userOwner = new mongoose.Types.ObjectId("6539af8ea806a3293a038870");

    await SaveClaim(claimData);

    res.status(201).send({ message: '¡Reclamo generado exitosamente!' });
}