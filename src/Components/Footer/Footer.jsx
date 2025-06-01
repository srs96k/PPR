import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div id="footer">
    <div className="footertop">
    <div className="box">
      <span id='contact1'>Contact Us</span>
      <span>+918805521048</span>
      <span>shubham12@gmail.com</span>
      <span>Address,city/India</span>
    </div>
     <div className="box">
      <span id='services'>Our Services</span>
      <span>Home</span>
      <span>Add Listing</span>
      <span>Rent</span>
     </div>
     <div className="box">
      <span id='Quick'>Quick Link</span>
      <span>Knowledge Base</span>
      <span>FAQ</span>
      <span>Contact</span>
     </div>
     <div className="box">
      <span id='logo'>
        Private Property Rental
      </span>

      <Link to={"/contact"}><button>Contact Us</button></Link>
     </div>
    </div>
     
    <div className="footerbottom"></div>
    <span>Privacy Policy || Use of terms</span>
    
    
   </div> 
  )
}

export default Footer