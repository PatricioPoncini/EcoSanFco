import jwt from "jsonwebtoken";
import { TOKEN_KEY, OPTION_TOKEN_KEY } from "../../env";
import { UserModel } from "../../database";

export const tokenSign = async (id: string) => {
    if (!TOKEN_KEY || !OPTION_TOKEN_KEY) {
        throw new Error("Secrets keys are empty");
    }

    const authToken = jwt.sign(
        {
            _id: id
        },
        TOKEN_KEY || OPTION_TOKEN_KEY,
        {
            algorithm: "HS256",
            expiresIn: "1d"
        }
    );

    const refreshToken = jwt.sign(
        {
            _id: id
        },
        TOKEN_KEY || OPTION_TOKEN_KEY,
        {
            algorithm: "HS256",
            expiresIn: "7d"
        }
    );

    const userFound = await UserModel.findById(id);

    if (!userFound) {
        throw new Error("User not found to sign token");
    }

    userFound.refreshToken = refreshToken;
    await userFound.save();

    return { authToken, refreshToken };
}