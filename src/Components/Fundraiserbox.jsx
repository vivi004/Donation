import React from 'react';
import '../Css/Style.css';

import { Link } from 'react-router-dom';
function Fundraiserbox(props) {
  return (
    <div className='a-box'>
    <div className='a-b-img'>
    <img src={props.image} alt=''/>
    </div>
    <div className='a-b-text'>
    <h3>{props.name}</h3>
    <Link to='#' className='agent-btn'>Learn More</Link>
    </div>
    </div>
  )
}

export default Fundraiserbox;