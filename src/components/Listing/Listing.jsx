import React, { useContext, useState } from 'react'
import './Listing.css'
import { StoreContext } from '../../context/StoreContext';
const Listing = (props) => {

    const {cart, add,remove} = useContext(StoreContext);
  return (
    <div className='item'>
      <img className="image" src={props.image} alt="" />
      <div className="info">
        <p>{props.name}</p>
        {!cart[props.id]
            ?<div><button className='add' onClick={()=>add(props.id)}>+</button>
            </div>
            :<div className='listing-counter'>
                <button className='subtract' onClick={()=>remove(props.id)}>-</button>
                <p  className='counter'>{cart[props.id]}</p>
                <button className='add' onClick={()=>add(props.id)}>+</button>
            </div>
        }
        </div>

        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
      </div>
     
  )
}

export default Listing
