import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import transactionRoutes from "./routes/transactions.js";
import { logger } from "./logs/logger.js"

const app = express();
app.use(cors());
dotenv.config();

const port = 8800 || process.env.PORT;

// Connect to db
const connect = () => {
    mongoose
        .connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            throw err;
        });
};

app.use(express.json()); //to allow app to take json file from outside
app.use("/api/transactions", transactionRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
}); //middleware that helps handling error in express

// Connect to server
app.listen(port, () => {
    connect();
    logger.info(`Server running on port ${port}`);
});
