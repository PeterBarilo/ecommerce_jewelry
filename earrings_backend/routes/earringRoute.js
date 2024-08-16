import express from 'express'
import { addEarring, list, remove } from '../controllers/earringController.js'
import multer from "multer"

const earringRouter = express.Router();

const store = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:store})

earringRouter.post("/add", upload.single("image"), addEarring);
earringRouter.get("/list", list);
earringRouter.post('/remove', remove);


export default earringRouter;
