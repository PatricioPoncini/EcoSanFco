import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    profileImg: { type: String, required: false, default: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" }, // only save the link of the image (the image will be save in the bucket)
    zone: { type: String, required: true },
    refreshToken: { type: String, default: "" }
});

export const UserModel = mongoose.model('User', userSchema);