import React, { useContext, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Order = () => {
  const {totalCol,collection,cart,url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    collection.map((item)=>{
      if(cart[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cart[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:totalCol()+10.99
    }
    let res = await axios.post(url+"/api/order/place",orderData)
    if(res.data.success){
      const {session_url} = res.data
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  }

  return (
    <form onSubmit={placeOrder} className='order'>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi">
          <input required name='firstName' onChange={changeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={changeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={changeHandler} value={data.email} type="email" placeholder='Email Address'/>
        <input required name='address1' onChange={changeHandler} value={data.address1} type="text" placeholder='Address Line 1'/>
        <input name='address2' onChange={changeHandler} value={data.address2} type="text" placeholder='Address Line 2'/>
        <div className="multi">
          <input required name='city' onChange={changeHandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={changeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi">
          <input required name='zipcode' onChange={changeHandler} value={data.zipcode} type="text" placeholder='Zip Code'/>
          <input required name='country' onChange={changeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={changeHandler} value={data.phone} type="text" placeholder='Phone Number'/>
      </div>
      <div className="order-right">
      <div className="bag-total">
          <h2>Bag Total</h2>
          <div>
            <div className="bag-total-details">
              <p>Subtotal</p>
              <p>${totalCol()}</p>
            </div>
            <hr />
            <div className="bag-total-details">
              <p>Delivery</p>
              <p>${(totalCol())===0?0:10.99}</p>
            </div>
            <hr />
            <div className="bag-total-details">
              <b>Total</b>
              <b>${(totalCol())===0?0:(totalCol()+10.99)}</b>
            </div>
          </div>
          <button type='submit'>PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Order
