import React from 'react';
import Navbar from './Navbar';
import '../Css/Style.css';

function Header() {
  return (
    <div className='header'>
      <Navbar/>
      <div className='intro'>
      <p>Looking for a Donors</p>
      <h1><span>HELP </span>and <span> SAVE</span></h1>
      <p className='details'>We make a life by what we give.” “We can't help everyone, but… Everyone can help someone.” </p>
      <a href='app.js' className='header-btn'>Donate</a>
      </div>
    </div>
  )
}

export default Header