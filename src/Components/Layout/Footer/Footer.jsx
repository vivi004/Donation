import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#fundraisers">Fundraisers</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
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