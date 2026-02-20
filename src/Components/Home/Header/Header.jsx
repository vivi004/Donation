import React, { useEffect } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Howitworks from '../Howitworks/Howitworks';
import Footer from '../../Layout/Footer/Footer';
import Helps from '../Helps/Helps';
import Fundraisers from '../Fundraisers/Fundraisers';
import Contact from '../Contact/Contact';
import About from '../About/About';
import '../../../Css/Style.css';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  useEffect(() => {
    // Check for hash in URL and scroll to element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div className='header'>
        <Navbar />
        <div className='intro'>
          <p>Looking for a Donors!</p>
          <h1><span>HELP </span>and<span> SAVE</span></h1>
          <p className='details'>"We make a life by what we give.” “We can't help everyone, but… Everyone can help someone.” </p>
          <br />
          <Link to='/login' className='header-btn'>Donate</Link>
        </div>
        <div>
        </div>
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='fundraisers'>
        <Fundraisers />
      </div>
      <div id='needs'>
        <Helps />
      </div>
      <div id='how-it-works'>
        <Howitworks />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Header;