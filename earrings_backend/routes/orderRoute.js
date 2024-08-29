import express from 'express'
import { orderList, placeOrder, verify,status } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place",placeOrder)
orderRouter.post("/verify",verify)
orderRouter.get("/list", orderList)
orderRouter.post("/status", status)


export default orderRouter