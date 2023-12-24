import mongoose from "mongoose";

export interface IPayload {
    id: string;
}

export interface IComment {
    claimId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
}

export interface IClaim {
    title: string;
    description: string;
    images: string[];
    upVotes: mongoose.Types.ObjectId[];
    userOwner: mongoose.Types.ObjectId;
    createdAt: Date;
}

export interface IUser {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    profileImg: string;
    zone: string;
    refreshToken: string;
}