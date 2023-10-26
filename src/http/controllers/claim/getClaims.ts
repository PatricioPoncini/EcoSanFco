import { Request, Response } from "express";
import { ClaimModel } from "../../../database";

const GetClaims = async (page: number, pageSize: number) => {
    const skip = (page - 1) * pageSize;
    const claims = await ClaimModel.find().select('-__v -description -userOwner').skip(skip).limit(pageSize);
    return claims;
}

// get claims withouth details
export const getClaims = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = 10;

    const claims = await GetClaims(page, pageSize);
    if (claims.length === 0) {
        return res.status(404).send({ message: 'No hay reclamos aún' });
    }

    res.status(200).json({ claims });
}
