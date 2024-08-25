import express from 'express'
import { add, remove, getBag } from '../controllers/bagController.js'

const bagRouter = express.Router();

bagRouter.post('/add',add)
bagRouter.post('/remove',remove)
bagRouter.post('/get',getBag)

export default bagRouter