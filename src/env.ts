import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const TOKEN_KEY = process.env.TOKEN_KEY;
export const OPTION_TOKEN_KEY = process.env.TOKEN_KEY;