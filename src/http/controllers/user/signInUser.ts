import { Request, Response } from "express";
import { UserModel } from "../../../database"
import { checkPassword } from "../../../utils/auth/validatePassword";
import { tokenSign } from "../../../utils/token";

export const signInUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = await tokenSign(user._id.toString());

    res.status(200).json({ token });
}