import mongoose from 'mongoose';
import { MONGO_URI } from './env';

export async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URI!, { serverSelectionTimeoutMS: 5000 });
        console.log('Datase connected');
    } catch (error) {
        console.error('Error connecting with database:', error);
    }
}