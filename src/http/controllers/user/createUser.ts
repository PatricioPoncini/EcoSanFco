import { Request, Response } from "express";
import { UserModel } from "../../../database";
import { hashPassword } from "../../utils";
import { IUserBodyData } from "../../types";

const SaveNewUser = async (userData: IUserBodyData) => {
    const newUser = new UserModel(userData);

    await newUser.save();

    return newUser;
}

export const createUser = async (req: Request, res: Response) => {
    const userData = req.body as IUserBodyData;
    userData.password = await hashPassword(userData.password);

    await SaveNewUser(userData);

    res.status(201).send({ message: "¡Usuario creado exitosamente!" });
}