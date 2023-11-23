import mongoose from "mongoose"

export interface IUser {
    _id: mongoose.Schema.Types.ObjectId;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    profileImg: string;
    zone: string;
    refreshToken: string;
}

export interface IUserBodyData {
    firstname: string;
    lastname: string;
    password: string;
    userName: string;
    profileImg?: string;
    zone: string;
}

export interface IClaimBodyData {
    title: string;
    description: string;
    images?: string[];
    userOwner: mongoose.Types.ObjectId;
}