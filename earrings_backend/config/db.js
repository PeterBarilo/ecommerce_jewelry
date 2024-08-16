import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://peterbarilo:!8YaQRE_8rr*CHR@cluster0.azkpg.mongodb.net/earrings').then(()=>console.log('Database Connected'));
}