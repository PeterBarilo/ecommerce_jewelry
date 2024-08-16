import mongoose from "mongoose";

const earringSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    new_price: {type:Number, required:true},
    old_price: {type:Number, required:true},
    image: {type:String, required:true},
    

})

const earringModel = mongoose.models.earring || mongoose.model("earring", earringSchema)

export default earringModel;