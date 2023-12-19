import { Request, Response } from "express";
import { UserModel } from "../../../database";
import mongoose from "mongoose";

const GetUserById = async (userId: mongoose.Types.ObjectId) => {
    const user = await UserModel.findOne({ _id: userId }).select('-_id');
    return user;
}

export const getUserById = async (req: Request, res: Response) => {
    const userId = new mongoose.Types.ObjectId(req.params.id);

    const user = await GetUserById(userId);
    if (!user) {
        return res.status(404).send({ message: "No existe el usuario que busca" });
    }

    res.status(200).json({ user });
}