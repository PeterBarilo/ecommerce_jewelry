import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import { assets } from '../../assets/assets.js'
const Orders = ({url}) => {

  const [orders, setOrders] = useState([])

  const orderFetch = async () =>{
    const res = await axios.get(url+'/api/order/list')
    if(res.data.success){
      setOrders(res.data.data)
    }
    else{
      toast.error("Error Fetching Orders")
    }
  }

  const statusHandler = async (event, orderId) =>{
    const res = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value,
    })
    if(res.data.success){
      await orderFetch()
    }
  }

  useEffect(()=>{
    orderFetch()
    console.log(orders)

  },[])
  return (
    <div className='order add'>
        <h2>Active Orders</h2>
        
        <div className="list">
          { orders.map((order,index)=>(
            <div key={index} className='item'>
                <img src={assets.receipt} alt="" />
                <div>
                  <p className='earring'>
                    {order.items.map((item,index)=>{
                      if(index === order.items.length-1){
                        return item.name + " x " + item.quantity
                      }
                      else{
                        return item.name + " x " + item.quantity + ", "
                      }
                    })}
                  </p>
                  <p className='date'>{(order.date).substring(0, (order.date).indexOf('T'))}</p>

                  <p className="name">{order.address.firstName+ " "+ order.address.lastName}</p>
                  <div className="addy">
                    <p>{order.address.address1+","}</p>
                    {order.address.address2 === null ? <p>{order.address.address2+", "}</p> : <p></p>}
                    <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+  order.address.zipcode}</p>
                    
                  </div>
                      <p className='phone'>{order.address.phone}</p>

                </div>
                <p>Items: {order.items.length}</p>
                <p>${order.amount}</p>
                <select className={order.status === "Delivered" ? "del" : ""} onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                  <option value="Processing">Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Orders
