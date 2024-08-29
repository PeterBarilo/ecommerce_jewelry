import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe  = new Stripe("ADD SECRET KEY")

const placeOrder = async (req,res) =>{
    const url_frontend = 'http://localhost:5173'

    try {
        const newOrder = new orderModel({
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"usd",
                product_data:{
                    name:item.name
                },
                unit_amount:item.new_price*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"Delivery"
                },
                unit_amount:10.99*100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${url_frontend}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${url_frontend}/verify?success=false&orderId=${newOrder._id}`,

        })
        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const verify = async (req,res) =>{
    const {orderId,success} = req.body
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            res.json({success:true,message:"payment success"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false,message:"payment failed"})

        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

const orderList = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const status = async (req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true, message:"Status has been Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error Updating Status"})
    }
}

export {placeOrder, verify, orderList,status}