import React from 'react';
import '../../../Css/Style.css';
import { useNavigate } from 'react-router-dom';

function Fundraiserbox(props) {
  const percentage = (props.raised / props.goal) * 100;
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
    <div className='a-box highlight'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='a-b-text'>
        <h3>{props.name}</h3>

        <div className='fund-progress'>
          <div className='progress-meta'>
            <span className='raised'>${props.raised?.toLocaleString()} raised</span>
            <span className='percent'>{Math.round(percentage)}%</span>
          </div>
          <div className='progress-bar'>
            <div className='progress-fill' style={{ width: `${percentage}%` }}></div>
          </div>
          <div className='goal'>Goal: ${props.goal?.toLocaleString()}</div>
        </div>

        <button className='agent-btn' onClick={handleDonateClick}>Donate Now</button>
      </div>
    </div>
  )
}

export default Fundraiserbox;