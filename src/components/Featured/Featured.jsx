import React, { useContext } from 'react'
import './Featured.css'
import Listing from '../Listing/Listing'
import { StoreContext } from '../../context/StoreContext'
const Featured = () => {
  const {collection} = useContext(StoreContext)

  return (
    <div className='featured' id='featured'>
      <h1>Featured Earrings</h1>
      <p className='featured-text'>Elevate your style with these unique, one-of-a-kind designs, crafted to add a touch of elegance to any occasion. Explore our featured selections below and find the perfect pair to express your individuality.</p>
      <div className="featured-list">
        {collection.map((item, index)=>{
            return (
                <Listing className="listing" key={index} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Listing>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Featured
