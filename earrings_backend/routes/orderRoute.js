import express from 'express'
import { placeOrder, verify } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place",placeOrder)
orderRouter.post("/verify",verify)

export default orderRouter