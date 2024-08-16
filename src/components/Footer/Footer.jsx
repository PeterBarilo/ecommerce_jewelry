import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    function toggleHover() {
        setIsHovered(prevState => ({isHovered: !prevState.isHovered}));
    }


  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <h2 className='logo'>ColorSplash</h2>
            <p className='socials-text'>Explore our socials below</p>
            <div className="socials">
                <img src={assets.insta_hover} onMouseEnter={toggleHover} onMouseLeave={toggleHover} alt="" />
                <img src={assets.facebook_hover} onMouseEnter={toggleHover} onMouseLeave={toggleHover} alt="" />
                <img src={assets.x_hover} onMouseEnter={toggleHover} onMouseLeave={toggleHover} alt="" />                
            </div>
        </div>
        <div className="footer-center">
            <h2>Documentation</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>Contact Information</h2>
            <ul>
                <li>colorsplash@gmail.com</li>
                <li>+1-949-981-7418</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="cr">ColorSplash© Earrings 2024</p>
      <a className="db" href="https://www.developersecure.com"  target="_blank">Designed by <strong>DeveloperSecure.com</strong></a>
    </div>
  )
}

export default Footer
