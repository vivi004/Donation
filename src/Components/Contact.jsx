import React from 'react';
import '../Css/Style.css';

import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div className='contact'>
    <h3>Any Help Contact Us</h3>
    <div className='contact-input'>
    <input type='email' placeholder='example@gmail.com'/>  
    <Link to='#'>Continue</Link>
    </div>
    
    </div>
  )
}

export default Contact; 