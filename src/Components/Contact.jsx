import React from 'react';
import '../Css/Style.css';

// import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className='contact'>
    <h3>Contact Us</h3>
    <div className='contact-input'>
    <input type='email' placeholder='example@gmail.com'/>  
    <a href='#'>Continue</a>
    </div>
    
    </div>
  )
}

export default Contact; 