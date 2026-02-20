import React from 'react';
import '../../../Css/Style.css';

import { useNavigate } from 'react-router-dom';

function Helpsbox(props) {
  const navigate = useNavigate();

  const handleDonateClick = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/donating');
    } else {
      navigate('/login?redirect=need');
    }
  };

  return (
    <div className='p-box'>
      <div className='p-img-container'>
        <img src={props.image} alt='funds' />
      </div>
      <div className='p-content'>
        <h4>{props.name}</h4>
        <div className='p-details'>
          <span className='donors-count'>
            <ion-icon name="people-outline"></ion-icon>
            {props.price}
          </span>
          <button className='price-btn' onClick={handleDonateClick}>Donate</button>
        </div>
      </div>
    </div>
  )
}

export default Helpsbox;