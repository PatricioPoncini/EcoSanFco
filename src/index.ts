import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectToDatabase } from './server';
import userRoutes from './http/router/user';
import claimRoutes from './http/router/claim';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/", userRoutes);
app.use("/", claimRoutes);

async function main() {
    try {
        app.listen(1110);
        await connectToDatabase();
        console.log("Server on port", 1110);
    } catch (error) {
        console.log("Database connection error");
        console.log(error);
    }
}

main();