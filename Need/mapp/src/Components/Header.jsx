import React from 'react';
import Navbar from './Navbar';
import Howitworks from './Howitworks';
import Footer from './Footer';
import Helps from './Helps';
import Fundraisers from './Fundraisers';
import Contact from './Contact';
import About from './About';
import '../Css/Style.css';

function Header() {
  return (
    <>
    <div className='header'>
    <Navbar/>
    <div className='intro'>
    <p>Looking for a Donors!</p>
    <h1><span>HELP </span>and<span> SAVE</span></h1>
    <p className='details'>"We make a life by what we give.” “We can't help everyone, but… Everyone can help someone.” </p>
    <br/>
    <a href='app.js' className='header-btn'>Donate</a>
    </div>
    <div>
    </div>
    </div>
    <About/>
    <Fundraisers/>
    <Helps/>
    <Howitworks/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Header;