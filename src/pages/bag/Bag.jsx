import React, { useContext } from 'react'
import './Bag.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Bag = () => {

  const {cart, collection, featuredItems, remove, totalCol, totalFeat} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='bag'>
      <div className="bag-items">
        <div className="bag-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {collection.map((item, index)=>{
          if(cart[item.id]>0){
            return(
              <>
              <div key="index" className='bag-items-title bag-items-item'>
                <img className='img' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <p>{cart[item.id]}</p>
                <p>${item.new_price*cart[item.id]}</p>
                <p onClick={()=>remove(item.id)} className='x'>x</p>
              </div>
              <hr />
              </>
            )
          }
        })}
        {featuredItems.map((item, index)=>{
          if(cart[item.id]>0){
            return(
              <>
              <div key="index" className='bag-items-title bag-items-item'>
                <img className='img' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <p>{cart[item.id]}</p>
                <p>${item.new_price*cart[item.id]}</p>
                <p onClick={()=>remove(item.id)} className='x'>x</p>
              </div>
              <hr />
              </>
            )
          }
        })}
      </div>
      <div className="bag-bottom">
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
          {(totalCol()+totalFeat())===0? <button className='disabled' disabled={true} onClick={()=> navigate('/order')}>CHECKOUT</button> :<button onClick={()=> navigate('/order')}>CHECKOUT</button>}

          
        </div>
        <div className="bag-promo">
          <div>
            <p>Enter Promo Code</p>
            <div className="bag-promo-input">
              <input type="text" placeholder='Promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Bag
