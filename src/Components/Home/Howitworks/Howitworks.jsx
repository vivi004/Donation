import React from 'react';
import '../../../Css/Style.css';
import './Howitworks.css';

function Howitworks() {
  return (
    <div className='how-it-works'>
      <div className='container'>
        <div className='hiw-header'>
          <h2>How It Works</h2>
          <p>Transparent and simple process to make a significant impact.</p>
        </div>

        <div className='hiw-steps'>
          <div className='hiw-step'>
            <div className='step-number'>01</div>
            <div className='step-icon'>
              <ion-icon name="create-outline"></ion-icon>
            </div>
            <h4>Start Campaign</h4>
            <p>Tell your story, set your goal, and launch your fundraising campaign in minutes.</p>
          </div>

          <div className='hiw-step active'>
            <div className='step-number'>02</div>
            <div className='step-icon'>
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <h4>Share with Others</h4>
            <p>Share your campaign across social media and communities to reach potential donors.</p>
          </div>

          <div className='hiw-step'>
            <div className='step-number'>03</div>
            <div className='step-icon'>
              <ion-icon name="card-outline"></ion-icon>
            </div>
            <h4>Withdraw Funds</h4>
            <p>Receive your funds directly and safely, ready to be used for your specific cause.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks;