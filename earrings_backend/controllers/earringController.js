import earringModel from "../models/earringModel.js";
import fs from 'fs'

const addEarring = async (req,res) =>{
    let img_file = `${req.file.filename}`
    const earring = new earringModel({
        name:req.body.name,
        description:req.body.description,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        image:img_file,
    })
    try{
        await earring.save();
        res.json({success:true, message:"Product Added"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error Adding Product"})
    }
}

const list = async (req,res) => {
    try{
        const products = await earringModel.find({});
        res.json({success:true,data:products})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const remove = async (req,res)=>{
    try {
        const  product = await earringModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`,()=>{})
        await earringModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({succes:false, message:"Failed to Delete Product"})
    }
}

export {addEarring, list,remove};