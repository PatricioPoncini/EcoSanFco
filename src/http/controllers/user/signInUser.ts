import { Request, Response } from "express";
import { UserModel } from "../../../database"
import { checkPassword } from "../../../utils/auth/validatePassword";
import { tokenSign } from "../../../utils/token";

const SignIn = async (username: string, password: string) => {
    const user = await UserModel.findOne({ username: username });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    
    const token = await tokenSign(user._id.toString());

    return token;
}

export const signInUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const token = await SignIn(username, password);

    res.status(200).json({ token });
}