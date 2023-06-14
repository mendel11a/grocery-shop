import express from "express"
import { getTransactions} from "../controllers/transaction.js"

const router = express.Router()

//get transactions
router.get("/", getTransactions)
export default router