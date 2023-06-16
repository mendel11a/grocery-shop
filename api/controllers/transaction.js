import { createError } from "../error.js";
import Transaction from "../models/Transaction.js";
import { logger } from "../logs/logger.js";


export const getTransactions = async (req, res, next) => {
    const { from, to } = req.query; // get from and to date from query

    const fromDate = new Date(from);
    const toDate = new Date(to);

    try {
        const transactions = await Transaction.find({
            date: { $gte: fromDate, $lte: toDate }, // get data from data to date
        });
        logger.info("Data loaded successfully");
        return res.status(200).json(transactions);
    } catch (err) {
        return createError(404, "Failed to fetch transactions");
    }
};
