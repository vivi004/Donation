import React from 'react';
import logo from '../Assets/Images/heart.png';
import '../Css/Style.css';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav>
       <Link to='app.js' className='logo'>
       <img src={logo} alt='logo'/>
       </Link>
       <input className='menu-btn' type='checkbox' id='menu-btn'/>
       <h2 className='new'>D&F'S</h2><br/><h4 className='old'>Gomnvrf</h4>

       <label className='menu-icon' for='menu-btn'>
       <span className='nav-icon'></span>
       </label>
       <ul className='menu'>
       <li><Link to ="/contact" >Contact Us</Link> </li>
       <li><Link to ="/how" >How it Works</Link> </li>
       <li><Link to ="/fund" >Fundraisers</Link> </li>
       <li><Link to ="/about" >About</Link> </li>
       <li><Link to ="/need" >Needs</Link> </li>
       <li><Link to ="/login" className='active'>Login to Fundraiser</Link> </li>
       
       </ul>
       </nav>
          </>              
                        
 )
 }
                      
 export default Navbar;