import React, { useContext } from 'react'
import './Collection.css'
import { StoreContext } from '../../context/StoreContext'
import Listing from '../Listing/Listing'
import { assets } from '../../assets/assets'

const Collection = () => {

    const {collection} = useContext(StoreContext)
  return (
    <div className='collection' id='collection'>
        <div className="full">
            <h2>Full Collection</h2>
           <img className="filter" src={assets.filter}  alt="" />
        </div>
      <div className="collection-list">
        {collection.map((item, index)=>{
            return <Listing className='listing' key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Listing>
        })}
      </div>
    </div>
  )
}

export default Collection
