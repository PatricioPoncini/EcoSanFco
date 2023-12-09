import { Request, Response } from "express";
import { ClaimModel } from "../../../database";

const GetRecentClaims = async (page: number, pageSize: number) => {
    const skip = (page - 1) * pageSize;
    const claims = await ClaimModel.find().select('-__v -description').skip(skip).limit(pageSize).sort({ createdAt: -1 }).populate('userOwner', 'username');
    return claims;
}

export const getRecentClaims = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = 10;

    const claims = await GetRecentClaims(page, pageSize);
    if (claims.length === 0) {
        return res.status(404).send({ message: 'No hay reclamos aún' });
    }

    res.status(200).json(claims);
}