import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    cartData:{type:Object, default:{}}
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model('user',userSchema)

export default userModel