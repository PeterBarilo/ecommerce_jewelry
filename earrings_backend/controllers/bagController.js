import userModel from "../models/userModel.js"

const add = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId})
        let cartData = await userData.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
        res.json({success:true, message:"Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'error'} )
    }
 
}

const remove = async (req,res) => {
    
}

const getBag = async (req,res) => {
    
}

export {add, remove, getBag} 