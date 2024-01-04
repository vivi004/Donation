import React from 'react';
import '../Css/Style.css';
 import aboutimage from '../Assets/Images/coin.jpg'
function About() {
  return (
    <div className='about'>
    <div className='about-model'>
    <img src={aboutimage} alt='about image'/>
    </div>
    <div className='about-text'>
    <h2>Join hands together <br/>Help others</h2>
    <p>process of raising funds with the help of people across the country, 
    using donation-based fundraising platforms as the medium. 
    Crowdfunding helps fund your emergency medical treatment or chosen cause with free 24*7 support & expert assistance. 
    Anyone can raise funds on donation platforms - from a newborn child, senior citizens to NGOs & more!</p>
    <button>View More Details </button>
    </div>
    </div>
  )
}

export default About;