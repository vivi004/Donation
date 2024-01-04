import React from 'react';
import '../Css/Style.css';

import { Link } from 'react-router-dom';
function Helpsbox(props) {
  return (
    <div className='p-box'>
    <img src={props.image} alt='funds'/>
    <p>{props.name}</p>
    <Link to='#' className='price'>{props.price }</Link>
    <Link to='#' className='buy-btn'>Donate</Link>
     
    </div>
  )
}

export default Helpsbox;