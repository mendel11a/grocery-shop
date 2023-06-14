import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        income: {
            type: Number,
            required: true,
        },
        outcome: {
            type: Number,
            required: true,
        },
    }
);

export default mongoose.model("Transaction", TransactionSchema);
