import React from 'react';
import '../Css/Style.css';

function Howitworks() {
  return (
    <div className='how-it-works'>
    <div className='container'>
    <h2>How It Works</h2>
    <div className='flex'>
    
    <div>
      <span className='fas fa-home'></span>
      <h4>Finding a Donor</h4>
      <p> For Treatment</p>
    </div>

    <div>
      <span className='fas fa-dollar-sign'></span>
      <h4>Finding a Donor</h4>
      <p>For Bloods</p>
    </div>

    <div>
      <span className='fas fa-chart-line'></span>
      <h4>Finding a Donor</h4>
      <p>For Education</p>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Howitworks;