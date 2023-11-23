import bcrypt from "bcrypt";

export const checkPassword = async (password: string, userPassword: string) => {
    const checkPassw = await bcrypt.compare(password, userPassword);
    return checkPassw;
}