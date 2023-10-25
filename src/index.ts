import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

async function main() {
    try {
        app.listen(1110);
        console.log("Server on port", 1110);
    } catch (error) {
        console.log("Database connection error");
        console.log(error);
    }
}

main();