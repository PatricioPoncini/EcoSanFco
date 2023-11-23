import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { OPTION_TOKEN_KEY, TOKEN_KEY } from "../../env";
import { IPayload } from "../../database";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json("Empty token");
    }

    if (!TOKEN_KEY || !OPTION_TOKEN_KEY) {
        throw new Error("Empty token keys");
    }

    try {
        jwt.verify(token, TOKEN_KEY || OPTION_TOKEN_KEY) as IPayload;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(400).json("Expired token");
        }
        console.log(error);
    }
}