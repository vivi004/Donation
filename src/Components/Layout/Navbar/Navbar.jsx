import React from 'react';
import logo from '../../../Assets/Images/heart.png';
import '../../../Css/Style.css';
import './Navbar.css';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav>
        <Link to='/' className='brand-names'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <h2 className='new'>D&F'S</h2>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />

        <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><a href="/#contact">Contact Us</a></li>
          <li><a href="/#how-it-works">How it Works</a></li>
          <li><a href="/#fundraisers">Fundraisers</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#needs">Needs</a></li>
          <li><Link to="/login" className='active'>Login to Fundraiser</Link></li>
        </ul>
      </nav>
    </>

  )
}

export default Navbar;