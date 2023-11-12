import jwt from "jsonwebtoken";
import { Request } from "express";
import { OPTION_TOKEN_KEY, TOKEN_KEY } from "../../env";

export const extractPayload = (req: Request) => {
    const token = req.header("Authorization");
    if (!token) {
        return null;
    }

    if (!TOKEN_KEY || !OPTION_TOKEN_KEY) {
        throw new Error("Secret keys are empty");
    }

    try {
        const payload = jwt.verify(token, TOKEN_KEY || OPTION_TOKEN_KEY);
        return payload;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            throw new Error("Expired token");
        }
    }
}