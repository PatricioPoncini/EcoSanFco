import jwt from "jsonwebtoken";
import { TOKEN_KEY, OPTION_TOKEN_KEY } from "../../env";
import { IUser } from "../../http";
import { UserModel } from "../../database";

export const tokenSign = async (user: IUser) => {
    if (!TOKEN_KEY || !OPTION_TOKEN_KEY) {
        throw new Error("Secrets keys are empty");
    }

    const authToken = jwt.sign(
        {
            _id: user._id
        },
        TOKEN_KEY || OPTION_TOKEN_KEY,
        {
            algorithm: "HS256",
            expiresIn: "60m"
        }
    );

    const refreshToken = jwt.sign(
        {
            _id: user._id
        },
        TOKEN_KEY || OPTION_TOKEN_KEY,
        {
            algorithm: "HS256",
            expiresIn: "60m"
        }
    );

    const userFound = await UserModel.findById(user._id);

    if (!userFound) {
        throw new Error("User not found to sign token");
    }

    userFound.refreshToken = refreshToken;
    await userFound.save();

    return { authToken, refreshToken };
}