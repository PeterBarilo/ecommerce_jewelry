import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import earringRouter from "./routes/earringRoute.js";
import bagRouter from "./routes/bagRoute.js";



//config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//Database connection
connectDB();

//api endpoints
app.use("/api/earring", earringRouter)
app.use("/images",express.static('uploads'))
app.use('/api/bag', bagRouter)

app.get("/",(req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://peterbarilo:<password>@cluster0.azkpg.mongodb.net/?