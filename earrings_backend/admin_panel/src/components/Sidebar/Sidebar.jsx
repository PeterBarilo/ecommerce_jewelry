import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="options">
            <NavLink to='/add' className="option">
                <img src={assets.add_circle} alt="" />
                <p>Add Products</p>
            </NavLink>
            <NavLink to='/list' className="option">
                <img src={assets.box} alt="" />
                <p>List Products</p>
            </NavLink>
            <NavLink to='/orders'className="option">
                <img src={assets.receipt} alt="" />
                <p>Orders</p>
            </NavLink>  
        </div>
    </div>
  )
}

export default sidebar
