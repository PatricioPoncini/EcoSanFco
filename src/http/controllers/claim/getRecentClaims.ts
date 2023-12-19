import { Request, Response } from "express";
import { ClaimModel } from "../../../database";

const GetRecentClaims = async (page: number, pageSize: number) => {
    const skip = (page - 1) * pageSize;

    const claims = await ClaimModel.find().skip(skip).limit(pageSize).sort({ createdAt: -1 }).populate('userOwner', 'username');

    const recentClaims = claims.map(claim => ({
        ...claim.toJSON(),
        description: truncateDescription(claim.description),
    }));

    const recentClaimsCount = await ClaimModel.countDocuments();

    return { recentClaims, recentClaimsCount };
}

const truncateDescription = (description: string) => {
    const maxLength = 100;
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
    }
    return description;
}

export const getRecentClaims = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = 10;

    const { recentClaims, recentClaimsCount } = await GetRecentClaims(page, pageSize);

    if (recentClaims.length === 0) {
        return res.status(404).send({ message: 'No hay reclamos aún' });
    }

    res.status(200).json({ recentClaims, recentClaimsCount });
}