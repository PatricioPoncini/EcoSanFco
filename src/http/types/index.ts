import mongoose from "mongoose"

export interface IUserBodyData {
    firstname: string,
    lastname: string,
    password: string,
    userName: string,
    profileImg?: string,
    zone: string
}

export interface IClaimBodyData {
    title: string,
    description: string,
    images?: string[],
    userOwner: mongoose.Types.ObjectId
}