import { createError } from "../error.js";
import Transaction from "../models/Transaction.js";


export const getTransactions = async (req, res, next) => {
    const { from, to } = req.query; // get from and to date from query

    const fromDate = new Date(from);
    const toDate = new Date(to);

    try {
        const transactions = await Transaction.find({
            date: { $gte: fromDate, $lte: toDate },
        });
        return res.status(200).json(transactions);
    } catch (err) {
        return createError(404, "Failed to fetch transactions");
    }
};
