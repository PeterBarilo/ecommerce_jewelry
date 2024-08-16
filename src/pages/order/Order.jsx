import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext';
const Order = () => {
  const {totalCol, totalFeat} = useContext(StoreContext);

  return (
    <form className='order'>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Address Line 1'/>
        <input type="text" placeholder='Address Line 2'/>
        <div className="multi">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone Number'/>
      </div>
      <div className="order-right">
      <div className="bag-total">
          <h2>Bag Total</h2>
          <div>
            <div className="bag-total-details">
              <p>Subtotal</p>
              <p>${totalCol()+totalFeat()}</p>
            </div>
            <hr />
            <div className="bag-total-details">
              <p>Delivery</p>
              <p>${(totalCol()+totalFeat())===0?0:10.99}</p>
            </div>
            <hr />
            <div className="bag-total-details">
              <b>Total</b>
              <b>${(totalCol()+totalFeat())===0?0:(totalCol()+totalFeat()+10.99)}</b>
            </div>
          </div>
          <button>PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Order
