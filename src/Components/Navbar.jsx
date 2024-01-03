import React from 'react';
import logo from '../Assets/Images/heart.png';
import { Link } from 'react-router-dom';
import '../Css/Style.css';

function Navbar() {
  return (
    <>
    <nav>
       <a href='app.js' className='logo'>
       <img src={logo} alt='logo'/>
       </a>
       <input className='menu-btn' type='checkbox' id='menu-btn'/>
       <label className='menu-icon' for='menu-btn'>
       <span className='nav-icon'></span>
       </label>
       <ul className='menu'>
       <li><Link to="/contact">Contact Us </Link></li>
       <li><Link to="/how">How It Works</Link></li>
       <li><Link to="/fund">Fundraisers</Link></li>
       <li><Link to="/about">About </Link></li>
      <li><Link to="/need">Needs</Link></li>
      </ul>
      <div>
      <li><Link to="/login" className='active'>Log In to Your Fundraiser</Link></li>
      </div>

       
</nav>
          </>              
                        
 )
 }
                      
 export default Navbar;