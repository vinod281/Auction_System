

import './Navbar.css' 
import React from 'react'
 
 export default function Navbar() {
   return (
    
    <div className="navbar">
    <div className="navbar-left">
      <a href="#">Online Auctions</a>
      <a href="#">Real Estate</a>
      <a href="#">Past Prices</a>
      <a href="#">About Us</a>
    </div>

    <div className="navbar-right">
      <a href="#">Change Language &#9662;</a>
      <a href="#">Login</a>
      <a href="#">Register To Bid</a>
      <a href="#">Sell With Us</a>
      <a href="#" className="email-alerts">Email Alerts</a>
    </div>
  </div>
  
   )
 }
 

