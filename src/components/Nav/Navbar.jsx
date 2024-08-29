import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    const {totalCol,} = useContext(StoreContext);
  return (
    <div className='navbar'>
        {/* ADD LOGO IMG <img src={assets.} alt="" />*/}
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":"la"}>Home</Link>
            <a href='#featured' onClick={() => setMenu("featured")}className={menu==="featured"?"active":"la"}>Featured</a>
            <a href='#collection'onClick={() => setMenu("collection")}className={menu==="collection"?"active":"la"}>Collection</a>
        </ul>

        <h2 className='title'><Link to="/">ColorSplash</Link></h2>
        <div className="navbar-right">
            <img className="search" src={assets.search} alt="" />
            <div className="navbar-search-icon">
                    <Link to='/cart'><img className="cart_hover" src={assets.bag_hover}  alt="" /></Link>
                    <Link to='/cart'><img className="cart" src={assets.cart}  alt="" /></Link>
                <Link to='/cart'><div className={(totalCol())===0?"":"dot"}></div></Link>
            </div>
            <button><a href="#footer">Contact</a></button>
        </div>
    </div>
  )
}

export default Navbar
