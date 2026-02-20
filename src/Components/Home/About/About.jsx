import React from 'react';
import '../../../Css/Style.css';
import './About.css';
import aboutimage from '../../../Assets/Images/coin.jpg'

function About() {
  return (
    <div className='about-section'>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-model'>
            <img src={aboutimage} alt='about' />
          </div>
          <div className='about-text'>
            <h2>Join hands together <br />Help others</h2>
            <p>We are a donation-based fundraising platform dedicated to helping people across the country raise funds for emergency medical treatments, education, and social causes. Our platform provides 24*7 support and expert assistance to ensure your cause reaches those who can help.</p>

            <div className='mission-vision'>
              <div className='mv-item'>
                <div className='mv-icon'>
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To empower individuals and NGOs to raise funds efficiently through transparency and technology.</p>
                </div>
              </div>

              <div className='mv-item'>
                <div className='mv-icon'>
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>A world where financial barriers never stand in the way of life-saving treatments or quality education.</p>
                </div>
              </div>
            </div>

            <button className='about-btn'>View More Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;