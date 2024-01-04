import React from 'react';
import '../Css/Footer.css';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Social Media</h4>
        <ul>
          <li><Link to="https://twitter.com">Twitter</Link></li>
          <li><Link to="https://facebook.com">Facebook</Link></li>
          <li><Link to="https://instagram.com">Instagram</Link></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>Email: viiiii@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;